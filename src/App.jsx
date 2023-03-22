import React from 'react';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Map from "./components/MapBlock/Map";
import Mission from "./components/Mission";
import BusinessLines from "./components/Business/BusinessLines";
import Benefits from "./components/Benefits";
import CorporateLife from "./components/CorpLife/CorporateLife";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Map/>
      <Mission/>
      <BusinessLines/>
      <Benefits/>
      <CorporateLife/>
    </div>
  );
}

export default App;
