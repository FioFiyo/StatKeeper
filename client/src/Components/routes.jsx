import React, {Component} from 'react';
import User from './Users/User.jsx';
import Home from './Homepage/Home.jsx';
import {Route} from 'react-router-dom';

class Routes extends Component {
  render(){
    return(
      <div className="routes">
        <Route path="/users/:id" component={User} />
        <Route exact path="/" component={Home} />
      </div>
    )
  }
}

export default Routes;
