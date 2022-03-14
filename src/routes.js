import React from 'react';
import {Route} from 'react-router-dom';

import Home from './Componentes/Home/Home';
import Cart from './Componentes/Cart/Cart';
import Form from './Componentes/Formulario/Form';
import Payment from './Componentes/Payment/Payment';
import TeamsList from './Componentes/Teams-List/Teams-List';
import TeamDetails from './Componentes/Team-Details/Team-Details';

const Routes = () => (
    <>
        <Route path="/cart" component={Cart} exact/>
        <Route path="/login" component={Form} exact/>
        <Route path="/payment" component={Payment} exact/>
        <Route path="/teams" component={TeamsList} exact/>
        <Route path="/teams/:id" component={TeamDetails} exact/>
        <Route path="/" component={Home} exact/>
    </>
);

export default Routes;
