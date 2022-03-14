import React, { Component } from 'react';
import TeamsList from '../Teams-List/Teams-List';
import TeamDetails from '../Team-Details/Team-Details';
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
                <Route path="/teams" component={TeamsList} exact />
                <Route path="/teams/:id" component={TeamDetails} exact/>
                <Route path="/" component={Home} exact/>
            </section>
        );
    }
}

export default Section;
