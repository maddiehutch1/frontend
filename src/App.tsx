import React from "react";
import logo from "./logo.svg";
import "./App.css";

function Header() {
  return (
    <div>
      <h1>The Madness of March Madness</h1>
      <h3>
        The website that provides you all you need to know about the NCAA
        competitors of March Madness 2024
      </h3>
      <p>
        Below are individual cards that contain key info of NCAA basketball
        teams
      </p>
    </div>
  );
}

// class TeamCard extends React.Component<CollegeBasketballTeams>{
//   render() {
//     return (
//       const oneTeam = this.props;
//       <div>
//         <h3>{oneTeam.school}</h3>
//         <h4>Mascot : {oneTeam.name}</h4>
//         <h4>Location : {oneTeam.city}, {oneTeam.state}</h4>
//       </div>
//     );
//   }

// }

// function AllTeamsCard() {
//   return (
//     <div>
//       {teams.map((oneTeam) => (
//         <TeamCard {...oneTeam} />
//       ))}
//     </div>
//   );
// }

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <body>
        {/* <TeamCard />
        <AllTeamsCard /> */}
      </body>
    </div>
  );
}

export default App;
