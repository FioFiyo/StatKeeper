import React, {Component} from 'react';
import Routes from './routes.jsx';
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

class App extends Component {

  componentDidUpdate(){
    window.onpopstate = (e) => {
      this.props.history.goBack();
    }
  }

  render(){
    return (
      <Router>
        <div className="App">
          <div className="container">
            <h1><Link to="/">Go to Root</Link></h1>
            <ul>
              <li><Link to="/users/45">User Info</Link></li>
              <li><Link to="/leagues">Leagues</Link></li>
            </ul>
          </div>
          <Routes />
        </div>
      </Router>
    )
  }
}

export default App;
