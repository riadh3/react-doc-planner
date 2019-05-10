import React from 'react';

const Footer = (props) =>
<div className="footer">
     <p className='countries-links'>{props.countries}</p>
     <p className='copyright'>{props.copyright}</p>
 </div>

export default Footer 
