import React, {Component} from 'react';
import UserInfo from './Users/UserInfo.jsx';
import Home from './Homepage/Home.jsx';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

class App extends Component {
  render(){
    return (
      <Router>
        <div className="App">
          <div className="container">
            <h1><Link to="/">Go to Root</Link></h1>
            <ul>
              <li><Link to="/users/45">User Info</Link></li>
            </ul>
            <Route path="/users/:id" component={UserInfo} />
            <Route exact path="/" component={Home} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
