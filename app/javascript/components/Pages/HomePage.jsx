import React from "react";
import Search from "../Search/Search";
import TopProduct from './TopProduct'

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <Search />
      </div>
    );
  }
}

export default HomePage;
