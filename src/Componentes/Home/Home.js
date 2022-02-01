import styled from '@emotion/styled';
import React from 'react';

const ImageContainer = styled ('div')({
    width: '200px'
})
const Image = styled ('img')({
    width: '100%'
})
const Home = () => {
    return (
        <div>
        <div>
            <h4>OFFICIAL TICKET MARKETPLACE OF THE NFL</h4>
            <p>The 2021 NFL schedule is here and tickets to your favorite teams’ games are now available. 
                Throughout the year, the NFL Ticket Exchange is your hub to find seats for NFL Regular Season 
                games, the NFL Playoffs and Super Bowl LVI. And as the Official Ticket Marketplace of the NFL, 
                we guarantee that the seat you buy is the seat you get – and our comprehensive refund policy 
                gives you peace of mind when you buy. We’ll see you on game day!</p>
        </div>
        <ImageContainer>
            <Image src='https://s1.ticketm.net/tm/en-us/img/static/nfl/20/DiscoverySports_NFL.jpg' alt='tickets'></Image>
        </ImageContainer>
        </div>
        
    );
};

export default Home;