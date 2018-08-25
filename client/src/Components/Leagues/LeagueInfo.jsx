import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import LeagueDetail from './LeagueDetail.jsx';

class LeagueInfo extends Component {
  constructor(props){
    super(props)
  }

  render(){
    let league = this.props.league
    const title = league["title"]
    let details = Object.keys(league).map(k => {
      if (k != "title") {
        return <LeagueDetail label={k} value={league[k]} key={`${league["id"]}-${k}`} />
      }
    })
    if (this.props.link) {
      details.unshift(
        <Link to={`/leagues/${league["id"]}`} key={`league-href-${league["id"]}`}>
          <h4>{title}</h4>
        </Link> 
      );
    }
    return(
      <ul>
        {details}
      </ul>
    )
  }
}

export default LeagueInfo;
