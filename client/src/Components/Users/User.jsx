import React, {Component} from 'react';
import UserInfo from './UserInfo.jsx';
import ax from '../../api.js';

class User extends Component {
  constructor(props){
    super(props)
    this.state = {
      user: {}
    }
  }

  componentDidMount(){
    ax.get(`/users/${this.props.match.params.id}`).then(res => {
      const user = res.data
      this.setState({user})
    })
  }

  render(){
    return(
      <UserInfo user={this.state.user} />
    )
  }
}

export default User;
