import React, {Component} from 'react';
import ax from '../../api.js';
import LeagueInfo from './LeagueInfo.jsx';

class LeagueList extends Component {

  constructor(props){
    super(props)
    this.state = {
      leagues: []
    }
  }

  componentDidMount(){
    ax.get('/leagues').then(res => {
      console.log(res)
      const leagues = res.data
      this.setState({leagues})
    })
  }

  render(){
    const leagues = this.state.leagues.map(l => {
      return( <LeagueInfo league={l} link={true} key={`league-${l["id"]}`}/> )
    })
    return(
      <ul>
        {leagues}
      </ul>
    )
  }
}

export default LeagueList;
