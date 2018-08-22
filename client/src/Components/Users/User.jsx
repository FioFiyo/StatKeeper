import React, {Component} from 'react';
import ax from '../../api.js';

class User extends Component {
  componentDidMount(){
    ax.get('/user/41').then(res => {
      const user = res.data
      this.setState({user})
    })
  }
}
