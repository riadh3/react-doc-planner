
import React from 'react';

const MainTitles = (props) =>
    <div className="main-title" >
        <img src={props.mainLogo}/>
        <h1 >{props.mainTitle}</h1>
    </div>

export default MainTitles