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
      isLoaded: false
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
      reactThis.setState({ items: search.games });
    };


    let ajaxURL = `https://www.5colorcombo.com/search?name=
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
        `https://www.5colorcombo.com/search?name=
    ${reactThis.state.keyword}`
      )
      .then(response => {
        this.setState({ items: response.data });
        console.log("axios response", response);
      });
  }

  render() {
    //const { keyword, items, isLoaded } = this.state;

    return (
      <div>
        <h2>Search</h2>
        <Form changed={this.changeHandler} search={this.searchHandler} />
      </div>
    );
  }
}

export default Search;
