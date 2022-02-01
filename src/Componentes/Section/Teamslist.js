import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { DataContext} from '../Context/Context'

export class Teamslist extends Component {
    static contextType = DataContext;
    render() {
        const {teams} = this.context;
        return (
            
            <div id="team">
                {
                    teams.map(team =>(
                        <div className='team-container' key={team.teamID}>
                            <Link to={`/teams/${team.teamID}` }>
                                <img src={team.logo} alt={team.teamName} ></img>
                            </Link>

                            <h3>{team.city}</h3>

                        </div>

                    ))
                }
            </div>
        );
    }
}

export default Teamslist;