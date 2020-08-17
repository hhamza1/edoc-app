import React from 'react';


import {SearchIcon, BellFillIcon, PersonIcon } from '@primer/octicons-react';

import './top-bar.styles.scss';



const TopBar = () => {
    return (
        <div className="top-bar">
            <div className="search-input-group">
                <SearchIcon className="icon" size={18} />
                <input type="text" name="searchbar" placeholder="Chercher..." />
            </div>
            <div className="notification-section">
                <BellFillIcon  className="icon" size={24} />
            </div>
            <div className="profile-section">
                <PersonIcon size={24} />
            </div>
        </div>
    )
}

export default TopBar;