import React from "react";
import Form from "../Form/Form";
import { hot } from 'react-hot-loader';
import ProductList from '../Pages/ProductList'

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      query: "",
      queryData: [] //will contain all the items that fall in the search
      //isLoading: true
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  changeHandler(event){
    console.log("query", event.target.value);
    this.setState({ query: event.target.value });
  };

  submitHandler(event){
    event.preventDefault();
    console.log("click");
    const reactThis = this;
    const QueryURL = 'https://beta.5colorcombo.com/api/search?name=' + encodeURI(reactThis.state.query);
    console.log("QueryURL",QueryURL);

    fetch(QueryURL, {
      method: "GET"
    })
      .then(results => {
        return results.json();
      })
      .then(data => {
        let games = data.games.map(game => {
          return(
            <div key={game.name}>
              <h2>Name: {game.name}</h2>
              <h2>Year published: {game.year_published}</h2>
              <h2>Players: {game.min_players}-{game.max_players}</h2>
              <h2>Playtime: {game.min_playtime}-{game.max_playtime}</h2>
              <h2>Age: {game.min_age}</h2>
              <img src={game.image_url} alt={game.name} />
              <h3>Description: {game.description}</h3>
              <h2>Price: {game.price}</h2>
            </div>
          );
        });
        this.setState({ queryData: games });
      });
  };

  render() {
    return (
      <div>
        <h1>Searching</h1>
        <Form changed={this.changeHandler} search={this.submitHandler} />
        {this.state.queryData}
      </div>
    );
  }
}

export default Search;
