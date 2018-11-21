import React from "react";
import Form from "../Form/Form";
import { hot } from 'react-hot-loader';
import ProductList from '../Pages/ProductList';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';

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
              <img src={game.image_url} alt={game.name} />
              <h2>Name: {game.name}</h2>
              <h2>Price: {game.price}</h2>

              <h2>Year published: {game.year_published}</h2>
              <h2>Players: {game.min_players}-{game.max_players}</h2>
              <h2>Playtime: {game.min_playtime}-{game.max_playtime}</h2>
              <h2>Age: {game.min_age}</h2>
              <h3>Description: {game.description}</h3>
            </div>
          );
        });
        this.setState({ queryData: games });
      });
  };

  render() {
    return (
      <div>
        <Form changed={this.changeHandler} search={this.submitHandler} />
        <Toolbar>
          <Grid justify="space-between" container  spacing={24}>
            <Grid item xs={4}>
                    <Paper><ProductList list={this.state.queryData} /></Paper>
            </Grid>
          </Grid>
        </Toolbar>
      </div>
    );
  }
}

export default Search;
