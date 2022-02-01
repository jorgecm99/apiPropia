import React, { Component } from 'react';
import { DataContext} from '../Context/Context'

class Teamsdetails extends Component {
    static contextType = DataContext;
    state = {
        team: []
    }

    getTeam = () => {
        if(this.props.match.params.id){
            const res = this.context.teams;
            const data = res.filter(item=>{
                return item.teamID === this.props.match.params.id
            })
            this.setState({team : data})
        }
    }

    componentDidMount(){
        this.getTeam()
    }


    render() {
        const {team} = this.state;
        return (
            <>
                {
                    team.map(item =>(
                        <div className="details" key={item.teamID}>
                            <img src={item.logo} alt={item.teamName} />
                            <div className="box">
                                <div className="row">
                                    <h2>{item.teamName}</h2>
                                </div>
                                <p>{item.city}</p>
                                <p>{item.conference}</p>
                                
                            </div>
                        </div>
                    ))
                }
            </>
        );
    }
}

export default Teamsdetails;