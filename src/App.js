import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
/** Components */
import SideMenu from './app/components/side-menu/side-menu.component.jsx';
import TopBar from './app/components/top-bar/top-bar.component.jsx';



/** App style */

import './App.css';
import PatientsList from './app/pages/patients-list/patients-list.component.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="nav-menu">
          <SideMenu />
          <TopBar />
        </div>
        <div className="main-pages">
          <Switch>
              <Route path="/patientsList">
                  <PatientsList />
              </Route>
            </Switch>
        </div>
      </div>
    </Router>


  );
}

export default App;
