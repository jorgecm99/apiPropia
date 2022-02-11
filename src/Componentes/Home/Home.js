import React from 'react';
import '../Styles/home.css'


const Home = () => {
    return (
        <div className='home-container'>
        <div className='text-container'>
            <h2>OFFICIAL TICKET MARKETPLACE OF THE NFL</h2>
            <p>The 2021 NFL schedule is here and tickets to your favorite teams’ games are now available. 
                Throughout the year, the NFL Ticket Exchange is your hub to find seats for NFL Regular Season 
                games, the NFL Playoffs and Super Bowl LVI. And as the Official Ticket Marketplace of the NFL, 
                we guarantee that the seat you buy is the seat you get – and our comprehensive refund policy 
                gives you peace of mind when you buy. We’ll see you on game day!</p>
        </div>
        <div className='image-container'>
            <img src='https://s1.ticketm.net/tm/en-us/img/static/nfl/20/DiscoverySports_NFL.jpg' alt='tickets'></img>
        </div>
        </div>
        
    );
};

export default Home;