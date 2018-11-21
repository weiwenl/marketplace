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
        <Search />
      </div>
    );
  }
}

export default HomePage;
