import React, { Component } from 'react';

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

class SideMenu extends Component {

  constructor() {
    super();
    this.state = {
      isClosed : false
    };
  }
  
  ToggleMenu = () => {
    this.state.isClosed === false ? this.setState({isClosed:true}) : this.setState({isClosed:false});
    console.log(this.state.isClosed);
  }

  render() {

    const {isClosed} = this.state;

    return(
      <div className={isClosed === true ?'side-menu side-menu--hidden':'side-menu'}>
          <div className="side-menu__logo-container">
            <img src={Logo} alt="E-Doc" />
            <span className="side-menu__logo-container--arrow" onClick={this.ToggleMenu}>
              {
                isClosed === false ? <span>&lsaquo;</span> : <span>&rsaquo;</span>
              }
            </span>
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
}

export default SideMenu;