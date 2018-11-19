import React from "react";
import Form from "../Form/Form";
import axios from "axios";
import { hot } from 'react-hot-loader';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      keyword: "",
      items: [], //will contain all the items that fall in the search
      isLoading: true,
      errors: null
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.searchHandler = this.searchHandler.bind(this);
  }

  changeHandler(){
    console.log("keyword", event.target.value);
    this.setState({ keyword: event.target.value });
  };

  searchHandler(){
    console.log("click");
    const reactThis = this;
    var reqListener = function() {
      console.log("Getting this back:", this.responseText);
      const search = JSON.parse(this.responseText);
      console.log("search", search);

      reactThis.setState({ items: search });
      console.log(reactThis.state.items.games);
    };


    let ajaxURL = `https://beta.5colorcombo.com/search?name=
    ${reactThis.state.keyword}`;
    console.log("newthis",reactThis);
    console.log(ajaxURL);

    const oReq = new XMLHttpRequest();

    oReq.addEventListener("load", reqListener);

    oReq.open("GET", ajaxURL);
    oReq.send();
  };

  ComponentDidMount() {
    axios
      .get(
        `https://www.5colorcombo.com/search?name=${reactThis.state.keyword}`)
      .then(response => {
        this.setState({
          items: response.games,
          isLoading: false
        });
        console.log("axios response", response);
      })
      .catch(error => this.setState({ error, isLoading: true}));
  }

  render() {
      const { items, isLoading } = this.state;

    return (
      <div>
        <h2>Search</h2>
        <Form changed={this.changeHandler} search={this.searchHandler} />

          {!isLoading ? (
              items.games.map((item,index) => {
                const { id, name, description, image_url } = item;
                return (
                  <div key={id}>
                    <p>{name}</p>
                    <div>
                      <img src={image_url} alt={name} />
                    </div>
                    <p>{description}</p>
                    <hr />
                  </div>
                );
              })
            ) : (
              <p>Loading...</p>
            )}
      </div>
    );
  }
}

export default Search;
