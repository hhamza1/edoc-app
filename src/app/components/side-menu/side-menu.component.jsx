import React, { Component } from 'react';

import {NavLink} from 'react-router-dom';

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
            <NavLink 
              className="side-menu__menu-items--element" to="/dashboard" alt="Dashboard" activeClassName="side-menu__menu-items--element--active">
                <MdDashboard className="menu-icons"/>
                Dashboard
            </NavLink>
            <NavLink className="side-menu__menu-items--element" to="/appointments" alt="Appointments" activeClassName="side-menu__menu-items--element--active">
                  <MdWatchLater className="menu-icons"/>
                  Appointments
                </NavLink>
              <NavLink className="side-menu__menu-items--element" to="/calendar" alt="Calendar" activeClassName="side-menu__menu-items--element--active">
                  <MdPermContactCalendar className="menu-icons"/>
                  Calendar
              </NavLink>
              <NavLink className="side-menu__menu-items--element" to="/patientsList" alt="Patients" activeClassName="side-menu__menu-items--element--active">
                  <MdPeople className="menu-icons"/>
                  Patients
              </NavLink>
              <NavLink className="side-menu__menu-items--element" to="/finance" alt="Finance" activeClassName="side-menu__menu-items--element--active">
                <MdAccountBalance className="menu-icons"/>
                Finance
              </NavLink>
              <NavLink className="side-menu__menu-items--element" to="/inventory" alt="Inventory" activeClassName="side-menu__menu-items--element--active">
                  <MdApps className="menu-icons"/>
                  Inventory
              </NavLink>
              <NavLink className="side-menu__menu-items--element" to="/history" alt="History" activeClassName="side-menu__menu-items--element--active">
                <MdHistory className="menu-icons"/>
                History
              </NavLink>
          </div>
      </div>
    )
  }
}

export default SideMenu;