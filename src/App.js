import React from 'react';

/** Components */

import SideMenu from './app/components/side-menu/side-menu.component';
import TopBar from './app/components/top-bar/top-bar.component';

/** App style */

import './App.css';

function App() {
  return (
    <div className="App">
      <SideMenu />
      <TopBar />
    </div>

  );
}

export default App;
