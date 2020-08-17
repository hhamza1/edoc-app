import React from 'react';

import {
      GraphIcon, 
      PeopleIcon, 
      CalendarIcon,
      InsightsIcon,
      PackageIcon,
      HistoryIcon
    } from '@primer/octicons-react';

import Logo from '../../assets/img/edoc.png';

import './side-menu.styles.scss';


const SideMenu = () => {

  return(
    <div className="side-menu">
        <div className="side-menu__logo">
          <img src={Logo} alt="E-Doc" />
        </div>
        <ul className="side-menu__items">    
            <li className="item">
              <a href="#">
                <GraphIcon className="icons" size={19} />
                Tableau de bord
              </a>
            </li>
            <li className="item">   
              <a href="#">
                  <PeopleIcon className="icons" size={19} />
                  Patients
              </a>
            </li>
            <li className="item">
              <a href="#">
                <CalendarIcon className="icons" size={19} />
                Agenda
              </a>
            </li>
            <li className="item">
              <a href="#">
                <InsightsIcon className="icons" size={19} />
                Finance
              </a>
            </li>
            <li className="item">
              <a href="#">
                <PackageIcon className="icons" size={19} />
                Inventaire
              </a>
            </li>
            <li className="item">
              <a href="#">
                <HistoryIcon className="icons" size={19} />
                Historique
              </a>
            </li>
        </ul>
    </div>
  )
}

export default SideMenu;