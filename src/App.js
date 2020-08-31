import React from 'react';

/** React Router Container */
import {
  BrowserRouter as Router
} from "react-router-dom";

/** Components */
import SideMenu from './app/components/side-menu/side-menu.component.jsx';
import TopBar from './app/components/top-bar/top-bar.component.jsx';

/** Routing List */

import RouteList from './RouteList.js';

/** App style */

import './App.css';



function App() {


  return (
    <Router>
      <div className="App">
        <div className="nav-menu">
          <SideMenu />
          <TopBar />
        </div>
        <div className="main-pages">
          <RouteList />
        </div>
      </div>
    </Router>


  );
}

export default App;
