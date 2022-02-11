import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faBars} from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { DataContext } from '../Context/Context';

var LogoNfl = require('../../Assets/nfl-league-logo.png')

class Header extends Component {
    static contextType = DataContext;

    state = {
        toggle: false
    }

    menuToggle = () =>{
        this.setState({toggle: !this.state.toggle})
    }

    render() {
        const {toggle} = this.state;
        const {cart} = this.context;
        return (
            <header className='headerstyle'>
                <div className="menu" onClick={this.menuToggle}>
                    <img src={faBars} alt="" width="20"/>
                </div>
                <div className='image-container'>
                    <Link to="http://www.nfl.com" style={{textDecoration: "none"}}>
                    <img src={LogoNfl} alt=''></img>
                    </Link>
                    
                </div>
                <nav>
                <ul className={toggle ? "toggle" : ""}>
                    <li><Link to="/" style={{textDecoration: "none"}}>Home</Link></li>
                    <li><Link to="/teams" style={{textDecoration: "none"}}>Teams</Link></li>
                    <li><Link to="/login" style={{textDecoration: "none"}}>Login</Link></li>
                    <li className="close" onClick={this.menuToggle}>
                            <img src={faMinus} alt="" width="20"/>
                        </li>
                </ul>
                
                    <div className='cart-style'>
                        <span>{cart.length}</span>
                        <Link to="/cart"><FontAwesomeIcon icon={faShoppingCart}/></Link>               
                    </div>
                </nav>    
                
                
                
            </header>
        );

    }
    
}

export default Header;