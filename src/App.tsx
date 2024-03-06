import React from "react";
import CollegeBasketballTeams from "./CollegeBasketballTeams.json";
import "./App.css";

const teams = CollegeBasketballTeams.teams;

interface TeamProps {
  tid: number;
  cid: number;
  did: number;
  school: string;
  name: string;
  abbrev: string;
  pop: number;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
}

function Header() {
  return (
    <div>
      <h1 className="colored-txt">The Madness of March Madness</h1>
      <h3>
        The website that provides you all you need to know about the NCAA
        competitors of March Madness 2024
      </h3>
      <p className="small-p">
        Below are individual cards that contain key info of NCAA basketball
        teams.
      </p>
    </div>
  );
}

class TeamCard extends React.Component<TeamProps> {
  render() {
    const oneTeam = this.props;
    return (
      <div className="TeamCard">
        <h3 className="colored-txt">{oneTeam.school}</h3>
        <h4>Mascot : {oneTeam.name}</h4>
        <h4>
          Location : {oneTeam.city}, {oneTeam.state}
        </h4>
      </div>
    );
  }
}

function AllTeamsCard() {
  return (
    <div>
      {teams.map((oneTeam) => (
        <TeamCard {...oneTeam} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <body>
        <AllTeamsCard />
      </body>
    </div>
  );
}

export default App;
