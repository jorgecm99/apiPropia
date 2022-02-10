import React, { Component } from 'react';

export const DataContext = React.createContext();

export class DataProvider extends Component {
    state = {
        teams: [
            {
                "teamID": "1",
                "teamName": "Arizona Cardinals",
                "conference": "NFC",
                "city": "Phoenix",
                "logo": "https://loodibee.com/wp-content/uploads/nfl-arizona-cardinals-team-logo-2.png",
                "state": "Arizona",
                "homeVenue": {
                  "name": "State Farm Stadium"
                },
                "capacity":63.415,
                "players": [],
                "count": 1,
                "price": 40
            },
            {
                "teamID": "2",
                "teamName": "Atlanta Falcons",
                "conference": "NFC",
                "city": "Atlanta",
                "logo": "https://loodibee.com/wp-content/uploads/nfl-atlanta-falcons-team-logo-2.png",
                "state": "Georgia",
                "homeVenue": {
                    "name": "Mercedes Benz-Arena"
                },
                "capacity":71.012,
                "players": [],
                "count": 1,
                "price": 38
            },
            {
                "teamID": "3",
                "teamName": "Baltimore Ravens",
                "conference": "AFC",
                "city": "Baltimore",
                "logo": "https://loodibee.com/wp-content/uploads/nfl-baltimore-ravens-team-logo-2.png",
                "state": "Maryland",
                "homeVenue": {
                  "name": "MT&T Bank Stadium"
                },
                "capacity":71.008,
                "players": [],
                "count": 1,
                "price": 45
            },
            {
                "teamID": "4",
                "teamName": "Buffalo Bills",
                "conference": "AFC",
                "city": "Buffalo",
                "logo": "https://loodibee.com/wp-content/uploads/nfl-buffalo-bills-team-logo-2.png",
                "state": "New York",
                "homeVenue": {
                  "name": "Highmark Stadium"
                },
                "capacity":71.608,
                "players": [],
                "count": 1,
                "price": 42
            },
            {
                "teamID": "6",
                "teamName": "Chicago Bears",
                "conference": "NFC",
                "city": "Chicago",
                "logo": "https://loodibee.com/wp-content/uploads/nfl-chicago-bears-team-logo-2.png",
                "state": "Illinois",
                "homeVenue": {
                  "name": "Soldier Field"
                },
                "capacity":61.418,
                "players": [],
                "count": 1,
                "price": 45
              },
              {
                "teamID": "7",
                "teamName": "Cincinnati Bengals",
                "conference": "AFC",
                "city": "Cincinnati",
                "logo": "https://loodibee.com/wp-content/uploads/cincinnati-bengals-logo-1997-2003.png",
                "state": "Ohio",
                "homeVenue": {
                  "name": "Paul Brown Stadium"
                },
                "capacity":65.535,
                "players": [],
                "count": 1,
                "price": 38
              },
              {
                "teamID": "8",
                "teamName": "Cleveland Browns",
                "conference": "AFC",
                "city": "Cleveland",
                "logo": "https://loodibee.com/wp-content/uploads/nfl-cleveland-browns-team-logo-2.png",
                "state": "Ohio",
                "homeVenue": {
                  "name": "FirstEnergy Stadium"
                },
                "capacity":67.895,
                "players": [],
                "count": 1,
                "price": 40
              },
              {
                "teamID": "9",
                "teamName": "Dallas Cowboys",
                "conference": "NFC",
                "city": "Dallas",
                "logo": "https://loodibee.com/wp-content/uploads/nfl-dallas-cowboys-team-logo-2.png",
                "state": "Texas",
                "homeVenue": {
                  "name": "AT&T Stadium"
                },
                "capacity":80.036,
                "players": [],
                "count": 1,
                "price": 50
              }
        ],
        cart: [],
        total: 0
    };

    addCart = (id) => {
        const {teams, cart} = this.state;
        const check = cart.every (item => {
            return item.teamID !== id
        })
        if (check){
            const data = teams.filter(team =>{
                return team.teamID === id
            })
            this.setState({cart: [...cart, ...data]})
        }else{
            alert("The product has been added")
        }
        
    };

    reduction = id => {
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item.teamID === id){
                item.count === 1 ? item.count = 1 : item.count -=1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    aumentar = id => {
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item.teamID === id){
                item.count += 1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();     
    };

    removeTeam = id => {
        if(window.confirm("Do you want to delete this product?")){
        const {cart} = this.state;
        cart.forEach((item, index) =>{
            if(item.teamID === id){
                cart.splice(index, 1)
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    }
    };

    getTotal = ()=>{
        const{cart} = this.state;
        const res = cart.reduce((prev, item) => {
            return prev + (item.price * item.count);
        },0)
        this.setState({total: res})
    };

    componentDidUpdate(){
        localStorage.setItem('dataCart', JSON.stringify(this.state.cart))
        localStorage.setItem('dataTotal', JSON.stringify(this.state.total))
    };

    componentDidMount(){
        const dataCart = JSON.parse(localStorage.getItem('dataCart'));
        if(dataCart !== null){
            this.setState({cart: dataCart});
        }
        const dataTotal = JSON.parse(localStorage.getItem('dataTotal'));
        if(dataTotal !== null){
            this.setState({total: dataTotal});
        }
    };


    render() {
        const {teams, cart, total} = this.state;
        const {addCart, reduction, aumentar, removeTeam, getTotal} = this;
        return (
            <DataContext.Provider value={{teams, cart, addCart, reduction, aumentar, removeTeam, getTotal, total}} >
                {this.props.children}
            </DataContext.Provider>
        );
    }
}


export default DataProvider;