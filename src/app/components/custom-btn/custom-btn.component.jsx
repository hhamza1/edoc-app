import React, { Children } from 'react';


import './custom-btn.styles.scss';



const CustomBtn = (props) => {
    return(
        <a href="#" className="btn">{props.title}</a>
    )
}

export default CustomBtn;