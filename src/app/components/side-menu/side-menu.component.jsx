import React from 'react';

import {Link, useLocation} from 'react-router-dom';

import Logo from '../../assets/img/edoc.png';

import {MdDashboard, 
        MdWatchLater, 
        MdPermContactCalendar, 
        MdPeople, 
        MdAccountBalance,
        MdApps,
        MdHistory} from 'react-icons/md';



import './side-menu.styles.scss';

const SideMenu = () => {

  let {pathname} = useLocation();
  

  // Detect the current page 


  return(
    <div className="side-menu">
        <div className="side-menu__logo-container">
          <img src={Logo} alt="E-Doc" />
          <span className="side-menu__logo-container--arrow">&#8249;</span>
        </div>
        <div className="side-menu__menu-items">
          <ul>
            <li className="side-menu__menu-items--element">
              <MdDashboard className="menu-icons"/>
              <Link to="/dashboard" alt="Dashboard">Dashboard</Link>
            </li>
            <li className="side-menu__menu-items--element">
              <MdWatchLater className="menu-icons"/>
              <Link to="/appointments" alt="Appointments">Appointments</Link>
            </li>
            <li className="side-menu__menu-items--element">
              <MdPermContactCalendar className="menu-icons"/>
              <Link to="/calendar" alt="Calendar">Calendar</Link>
            </li>
            <li className="side-menu__menu-items--element">
              <MdPeople className="menu-icons"/>
              <Link to="/patientsList" alt="Patients">Patients</Link>
            </li>
            <li className="side-menu__menu-items--element">
              <MdAccountBalance className="menu-icons"/>
              <Link to="/finance" alt="Finance">Finance</Link>
            </li>
            <li className="side-menu__menu-items--element">
              <MdApps className="menu-icons"/>
              <Link to="/inventory" alt="Inventory">Inventory</Link>
            </li>
            <li className="side-menu__menu-items--element">
              <MdHistory className="menu-icons"/>
              <Link to="/history" alt="History">History</Link>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default SideMenu;