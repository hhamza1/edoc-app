import React from 'react';

import './top-bar.styles.scss';


import {MdSearch} from 'react-icons/md';



const TopBar = () => {
    return (
        <div className="top-bar">
            <div className="top-bar__input-group">
                <input type="text" name="search" placeholder="Search..." />
                <MdSearch />
            </div>
        </div>
    )
}

export default TopBar;