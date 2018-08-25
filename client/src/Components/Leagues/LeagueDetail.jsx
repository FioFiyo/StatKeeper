import React, {Component} from 'react';

class LeagueDetails extends Component {
  render(){
    return(
      <li>{this.props.label}: {this.props.value}</li>
    )
  }
}

export default LeagueDetails;
