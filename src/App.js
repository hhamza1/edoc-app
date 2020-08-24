import React from 'react';

/** Components */
import SideMenu from './app/components/side-menu/side-menu.component.jsx';
import TopBar from './app/components/top-bar/top-bar.component.jsx';



/** App style */

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="nav-menu">
        <SideMenu />
        <TopBar />
      </div>
    </div>

  );
}

export default App;
