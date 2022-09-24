import React, { useState } from 'react';
import Header from './Header/Header.jsx';
import Map from './Map/Map';
import './App.css';

function App() {
  const [ position, setPosition ] = useState([51.505, -0.09]);

  return (
    <div className="App">
      <Header setPosition={setPosition} />
      <Map position={position} />
    </div>
  );
}

export default App;
