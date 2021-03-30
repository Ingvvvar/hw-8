import React from 'react';
import './App.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

import Dolphin from "./components/Dolphin/Dolphin";
import Shark from "./components/Shark/Shark";
import Whale from "./components/Whale/Whale";
import Shrimp from "./components/Shrimp/Shrimp";

function App() {
  return (
    <div className="wrapper">
      <h1>Marine Сreatures</h1>
      <Shrimp />
      <BrowserRouter>
        <nav>
          <ul>
            <li><Link to="/dolphin">Dolphin</Link></li>
            <li><Link to="/shark">Shark</Link></li>
            <li><Link to="/shark/tiger">Tiger Shark</Link></li>
            <li><Link to="/shark/white">White Shark</Link></li>
            <li><Link to="/whale">Whale</Link></li>
            <li><Link to="/whale/beluga">Beluga Whale</Link></li>
            <li><Link to="/whale/blue">Blue Whale</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route path="/dolphin">
            <Dolphin />
          </Route>
          <Route path="/shark">
            <Shark />
          </Route>
          <Route path="/whale">
            <Whale />
          </Route>
        </Switch>

      </BrowserRouter>


    </div>
  );
}

export default App;
