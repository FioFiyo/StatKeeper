import React, {Component} from 'react';
import UserDetail from './UserDetail.jsx';
import ax from '../../api.js';

class UserInfo extends Component {

  constructor(props){
    super(props);
  }

  render(){
    console.log(this.context.history)
    return(
      <ul>
        {
          Object.keys(this.props.user).map( (k, i) => {
            return <UserDetail label={k} value={this.props.user[k]} key={`${this.props.user["id"]}-${k}`} />
          })
        }
      </ul>
    )
  }
}

export default UserInfo;
