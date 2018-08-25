import React, {Component} from 'react';
import UserDetail from './UserDetail.jsx';
import ax from '../../api.js';

class UserInfo extends Component {

  constructor(props){
    super(props);
  }

  render(){
    const user = this.props.user
    const details = Object.keys(user).map( (k, i) => {
      return <UserDetail label={k} value={user[k]} key={`${user["id"]}-${k}`} />
    })
    return(
      <ul>
        {details}
      </ul>
    )
  }
}

export default UserInfo;
