import React, {Component} from 'react';
import User from './Users/User.jsx';
import Home from './Homepage/Home.jsx';
import LeagueList from './Leagues/LeagueList.jsx';
import League from './Leagues/League.jsx';
import {Route} from 'react-router-dom';

class Routes extends Component {
  render(){
    return(
      <div className="routes">
        <Route exact path="/" component={Home} />
        <Route exact path="/leagues" component={LeagueList} />
        <Route path="/leagues/:id" component={League} />
        <Route path="/users/:id" component={User} />
      </div>
    )
  }
}

export default Routes;
