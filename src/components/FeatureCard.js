import React from 'react';

const FeatureCard = (props) =>
<div className="feature-card">
    <img src={props.icon} />
    <h2 className="feature-card-title">{props.title}</h2>
    <span className="description">{props.description}</span>
</div>
export default FeatureCard 
