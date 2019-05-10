
import React from 'react';


const ImagesGrid= (props) =>
         <div className="city">
            <a href="#" className="city-link">
                <img className="city-image" src={props.imageLink} />
                <div className="city-sub">
                    <h3 className="city-name">{props.cityName}</h3>
                    <span> see opening </span>
                 </div>
            </a>

         </div>

export default ImagesGrid;

