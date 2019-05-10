import React from 'react';


function GlobalList(props) {
    const items = props.items;

    const listItems = items.map((item) =>
             <li key={item.toString()} className="itm">
                <img src="https://www.docplanner.com/img/sygnet.png" className="imge" 
                        width='18px' height="18px"/> 
                      {item}
             </li> 

    );
    return (
      <ul className="list-culture"> {listItems} </ul>
    );
  }

export default GlobalList 