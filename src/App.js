import logo from "./assets/testimg.png";
import './App.css';
import React from 'react';
//import TripsContainer from "./TripsContainer";
import TravelersContainer from "./components/TravelersContainer";
//import DestinationsContainer from "./DestinationsContainer";

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <TravelersContainer />
        </p>
        <p>
          {/* <TripsContainer/> */}
        </p>
        <p>
          {/* <DestinationsContainer/> */}
        </p>
      </header>
    </div>
  );
}

export default App;
