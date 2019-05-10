import React from 'react';


const FeaturePlatform = (props) =>
    <div className="feature-platform">
       <h1 className="feature-platform-title">{props.title}</h1>
       <p className="description">{props.description}</p>
       <img src={props.icon} />
    </div>

export default FeaturePlatform 
