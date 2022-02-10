import React, { Component } from 'react';
import { DataContext} from '../Context/Context';
import { Link } from 'react-router-dom';
import '../Styles/teamdetails.css'

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
        const {addCart} = this.context;
        return (
            <>
                {
                    team.map(item =>(
                        <section>
                            <div className="details" key={item.teamID}>
                            <img src={item.logo} alt={item.teamName} />
                            <div className="box">
                                <div className="row">
                                    <h2>{item.teamName}</h2>
                                </div>
                                <p>{item.city}</p>
                                <p>{item.conference}</p>
                                <span>{item.homeVenue.name}</span>
                                
                            </div>
                        </div>
                        <Link to="/cart" className="cart" onClick={() => addCart(item.teamID)}>
                                Add to cart
                        </Link>

                        </section>
                        
                    ))
                }
            </>
        );
    }
}

export default Teamsdetails;