import React, {Component} from 'react';
import ax from '../../api.js';
import UserInfo from './UserInfo.jsx';

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
      <div>
        <UserInfo user={this.state.user} />
      </div>
    )
  }
}

export default User;
