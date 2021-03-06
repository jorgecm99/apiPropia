import React, { Component } from 'react';
import Teamslist from './Teamslist';
import Teamsdetails from './Teamsdetails';
import Home from '../../Componentes/Home/Home';
import { Route } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Payment from '../Payment/Payment';
import Form from '../Formulario/Form';

class Section extends Component {
    render() {
        return (
            <section>
                <Route path="/payment" component={Payment} exact/>
                <Route path="/cart" component={Cart} exact/>
                <Route path="/login" component={Form} exact/>
                <Route path="/teams" component={Teamslist} exact />
                <Route path="/teams/:id" component={Teamsdetails} exact/>
                <Route path="/" component={Home} exact/>     
            </section>
        );
    }
}

export default Section;