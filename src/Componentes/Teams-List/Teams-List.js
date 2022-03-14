import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { DataContext} from '../Context/Context';
import '../Styles/teamlist.css'

export class TeamsList extends Component {
    static contextType = DataContext;
    render() {
        const {teams} = this.context;
        return (

            <div id="team">
                {
                    teams.map(team =>(
                        <section className='team-list'>
                                <div className='team-container' key={team.teamID}>
                                        <Link to={`/teams/${team.teamID}` }>
                                        <img src={team.logo} alt={team.teamName} ></img>
                                        </Link>
                                    <div className='team-container-detail'>
                                        <h3>{team.teamName}</h3>
                                        <p>{team.homeVenue.name}, {team.city}</p>
                                        <p>Capacity: {team.capacity}</p>
                                        <button onClick={()=>this.context.addCart(team.teamID)}>Comprar Tickets</button>
                                    </div>

                                </div>


                        </section>


                    ))
                }
            </div>
        );
    }
}

export default TeamsList;
