import React, {Component} from 'react';

class UserDetail extends Component {

  constructor(props){
    super(props)
  }

  render(){
    return(
      <li>{this.props.label}: {this.props.value}</li>
    )
  }

}

export default UserDetail;
