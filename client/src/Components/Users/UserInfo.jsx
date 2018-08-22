import React, {Component} from 'react';
import UserDetail from './UserDetail.jsx';
import ax from '../../api.js';

class UserInfo extends Component {

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

  mapInfo(){
  }

  render(){
    return(
      <ul>
        {
          Object.keys(this.state.user).map( (k, i) => {
            return <UserDetail label={k} value={this.state.user[k]} key={`${this.state.user["id"]}-${k}`} />
          })
        }
      </ul>
    )
  }
}

export default UserInfo;
