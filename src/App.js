import './index.css';
import React from 'react';
import {Routes, Route} from 'react-router-dom';
// import TripsContainer from "./components/TripsContainer";
// import TravelersContainer from "./components/TravelersContainer";
// import DestinationsContainer from "./components/DestinationsContainer";
import Caravan from "./components/Caravan";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  
  return (
    <div class="App">
        <Routes>
          <Route path="/" element={ <Home/>} />
          <Route path="about" element={ <About/> } />
          <Route path="caravan" element={ <Caravan/> } />
        </Routes>
    </div>
  );
}

export default App;
