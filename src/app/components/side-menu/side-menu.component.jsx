import React from 'react';

import {Link} from 'react-router-dom';

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
              <Link to="/patientsList" alt="Dashboard">Dashboard</Link>
            </li>
            <li className="side-menu__menu-items--element">
              <MdWatchLater className="menu-icons"/>
              <Link to="/patientsList" alt="Appointments">Appointments</Link>
            </li>
            <li className="side-menu__menu-items--element">
              <MdPermContactCalendar className="menu-icons"/>
              <Link to="/patientsList" alt="Calendar">Calendar</Link>
            </li>
            <li className="side-menu__menu-items--element">
              <MdPeople className="menu-icons"/>
              <Link to="/patientsList" alt="Patients">Patients</Link>
            </li>
            <li className="side-menu__menu-items--element">
              <MdAccountBalance className="menu-icons"/>
              <Link to="/patientsList" alt="Finance">Finance</Link>
            </li>
            <li className="side-menu__menu-items--element">
              <MdApps className="menu-icons"/>
              <Link to="/patientsList" alt="Inventory">Inventory</Link>
            </li>
            <li className="side-menu__menu-items--element">
              <MdHistory className="menu-icons"/>
              <Link to="/patientsList" alt="History">History</Link>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default SideMenu;