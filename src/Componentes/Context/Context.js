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
                "players": []
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
                    "players": []
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
                "players": []
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
                "players": []
            }
        ]
    }
    render() {
        const {teams} = this.state;
        return (
            <DataContext.Provider value={{teams}} >
                {this.props.children}
            </DataContext.Provider>
        );
    }
}


export default DataProvider;