
import React from 'react';


const ServiceCard = (props) =>
  <div className='service-card' style={{background: props.service.background}}>
    <p className='category'>{props.service.category}</p>
    <h1 className='title'>{props.service.title}</h1>
    <img className='screenshot' src={props.service.image}/>
  </div>

export default ServiceCard