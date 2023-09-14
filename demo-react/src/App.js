import React, { Component } from 'react';

import { render } from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Clock from './Components/clock/index.js'
import Sum from './Components/Sum/index'
import WorldClock from './Components/worldclock/index'

function App() {
  return (
    <div className="App">
      <Clock/>
       <Sum/>
       <WorldClock tenThanhPho = {'vietnam'} muiGio = {8}/>
    </div>
  );
}

export default App;
