import React from 'react';


import './custom-btn.styles.scss';



const CustomBtn = (props) => {
    return(
        <a href="#" className={props.reverse ? "btn btn--reverse" : "btn"}>{props.title}</a>
    )
}

export default CustomBtn;