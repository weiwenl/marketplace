import React from "react"
import {NavLink} from "react-router-dom"

import Router from './Router'

const Navigation = (props) =>
  <nav>
    <ul>
      <li><NavLink to='/'>The Games Marketplace</NavLink></li>
      <li><NavLink to='/TopProduct'>Top 30 Games</NavLink></li>
    </ul>
  </nav>


class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <Navigation />
        <Router />
      </div>

    );
  }
}

export default App;
