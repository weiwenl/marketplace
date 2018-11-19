import React from "react";
import { Route, Switch } from "react-router-dom";
import Form from "./Form/Form";
import Search from "./Search/Search";


class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
          <Switch>
            <Route exact path="/" component={Search} />
            
          </Switch>

      </div>
    );
  }
}

export default App;
