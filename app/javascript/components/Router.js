import React from 'react'
import {Switch, Route} from 'react-router-dom'

//import components
import HomePage from './Pages/HomePage'
import TopProduct from './Pages/TopProduct'

const Routes = () => {
  return(
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path="/TopProduct" component={TopProduct} />
    </Switch>
  );
}

export default Routes
