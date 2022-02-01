import React, { Component } from 'react';
import Teamslist from './Teamslist';
import Teamsdetails from './Teamsdetails';
import Home from '../../Componentes/Home/Home';
import Tickets from '../../Componentes/Tickets/Tickets';
import { Route } from 'react-router-dom';

class Section extends Component {
    render() {
        return (
            <section>
                <Route path="/tickets" component={Tickets} exact/>
                <Route path="/teams" component={Teamslist} exact />
                <Route path="/teams/:id" component={Teamsdetails} exact/>
                <Route path="/" component={Home} exact/>     
            </section>
        );
    }
}

export default Section;