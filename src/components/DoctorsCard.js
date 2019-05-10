
import React from 'react';

const DoctorsCard = (props) =>
       <div className="service-card" style={{background: '#3d83df'}}>
            <p className='category'>{props.category}</p>
            <h1 className='title'>{props.title}</h1>
            <img className='screenshot' src={props.image}/>
        </div>

export default DoctorsCard 