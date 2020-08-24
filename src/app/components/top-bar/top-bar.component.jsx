import React from 'react';

import UserPic from '../../assets/img/edoc.png';


import './top-bar.styles.scss';


import {MdSearch, MdNotifications} from 'react-icons/md';



const TopBar = () => {
    return (
        <div className="top-bar">
            <div className="top-bar__input-group">
                <MdSearch className="top-bar--icon"/>
                <input type="text" name="search" placeholder="Search..." />
            </div>
            <div className="top-bar__notif-user">
                <MdNotifications className="top-bar--icon" />
                <div className="top-bar__notif-user--user-profile">
                    <img src={UserPic} alt="User Profile" />
                    <div className="user-info">
                        <span className="username">
                            Admin 
                        </span>
                        <span className="user-status">
                            <div className="status"></div>Online
                        </span>
                    </div>
                    <span className="top-bar__notif-user--arrow">&#709;</span>
                </div>
            </div>
        </div>
    )
}

export default TopBar;