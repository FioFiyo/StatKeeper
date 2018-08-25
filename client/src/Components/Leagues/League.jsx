import React, {Component} from 'react';
import ax from '../../api.js'
import LeagueInfo from './LeagueInfo.jsx';

class League extends Component {
  constructor(props){
    super(props)
    this.state = {
      league: {}
    }
  }

  componentDidMount(){
    ax.get(`/leagues/${this.props.match.params.id}`).then(res => {
      const league = res.data;
      this.setState({league});
    })
  }

  render(){
    return(
      <div>
        <LeagueInfo league={this.state.league} />
      </div>
    )
  }

}

export default League;
