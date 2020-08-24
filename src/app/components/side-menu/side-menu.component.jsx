import React from 'react';

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
              <a href="#" alt="Dashboard">Dashboard</a>
            </li>
            <li className="side-menu__menu-items--element">
              <MdWatchLater className="menu-icons"/>
              <a href="#" alt="Appointments">Appointments</a>
            </li>
            <li className="side-menu__menu-items--element">
              <MdPermContactCalendar className="menu-icons"/>
              <a href="#" alt="Calendar">Calendar</a>
            </li>
            <li className="side-menu__menu-items--element">
              <MdPeople className="menu-icons"/>
              <a href="#" alt="Patients">Patients</a>
            </li>
            <li className="side-menu__menu-items--element">
              <MdAccountBalance className="menu-icons"/>
              <a href="#" alt="Finance">Finance</a>
            </li>
            <li className="side-menu__menu-items--element">
              <MdApps className="menu-icons"/>
              <a href="#" alt="Inventory">Inventory</a>
            </li>
            <li className="side-menu__menu-items--element">
              <MdHistory className="menu-icons"/>
              <a href="#" alt="History">History</a>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default SideMenu;