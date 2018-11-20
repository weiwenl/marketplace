import React from "react";

import SingleProduct from "../Features/SingleProduct"

class TopProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      games: []
    };
  }

  componentDidMount() {
    const url = `https://www.5colorcombo.com/api/search?order-by=popularity&ascending=false`;
    fetch(url, {
      method: "GET"
    })
      .then(results => {
        return results.json();
      })
      .then(data => {
        let games = data.games.map(game => {
          return(
            <div key={game.name}>
              <h2>{game.name}</h2>
              <img src={game.image_url} alt={game.name} />
              <h6>{game.description}</h6>
            </div>
          );
        });
        this.setState({ games: games });
      });
  }

  render() {
    return (
      <div>
        <h1>Games Marketplace</h1>
        <SingleProduct games={this.state.games} />
      </div>
    );
  }
}

export default TopProduct;
