import React, { Component } from 'react';
import '../Core/footer.css';

class Footer extends Component {
    render() {
        return (
            <div className='main-footer'>
                <ul>
                    <li className='main-item'>Helpful Links</li>
                    <li>My account</li>
                    <li>Ticket your event</li>
                    <li>Refunds and exchanges</li>
                    <li>Get Help</li>
                </ul>
                <ul>
                    <li className='main-item'>Our network</li>
                    <li>Live Nation</li>
                    <li>Frontgate Tickets</li>
                    <li>Ticketsweb</li>
                    <li>Ticketsnow</li>
                </ul>
                <ul>
                    <li className='main-item'>About Us</li>
                    <li>Who We Are</li>
                    <li>Ticketmaster Blog</li>
                    <li>Ticketing 101</li>
                    <li>Work with Us</li>
                </ul>
                <ul>
                    <li className='main-item'>Friend and Partners</li>
                    <li>American Express</li>
                    <li>Allianz</li>
                    <li>AWS</li>
                    <li>Get Your App</li>
                </ul>
            </div>
        );
    }
}

export default Footer;