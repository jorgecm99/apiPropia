import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='headerstyle'>
            <nav>
            <ul className='headerlist'>
                <Link to="/" style={{textDecoration: "none"}}>Home</Link>
                <Link to="/teams" style={{textDecoration: "none"}}>Teams</Link>
                <Link to="/tickets" style={{textDecoration: "none"}}>Tickets</Link>
                <Link to="/login" style={{textDecoration: "none"}}>Login</Link>
            </ul>
            </nav>
            
        </header>
    );
};

export default Header;