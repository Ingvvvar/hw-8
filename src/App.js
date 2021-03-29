import React from 'react';
import './App.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

import Dolphin from "./components/Dolphin/Dolphin";
import Shark from "./components/Shark/Shark";
import Whale from "./components/Whale/Whale";

function App() {
  return (
    <div className="wrapper">
      <h1>Marine Mammals</h1>
      <BrowserRouter>
        <nav>
          <ul>
            <li><Link to="/dolphin">Dolphin</Link></li>
            <li><Link to="/shark">Shark</Link></li>
            <li><Link to="/whale">Whale</Link></li>
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
