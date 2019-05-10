import React from 'react';

const Header= (props) =>
       <div className="main-header" >

            <a href="https://www.docplanner.com/about-us">
                <img className="logo" src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1" alt="Docplanner Group" style={{width:"250px" , 'height':"50px"}} />
            </a>
            <nav>
                    <ul className="list-header">
                        <li ><a href="https://www.docplanner.com/about-us" className="active"> About us </a></li>
                        <li><a href="https://www.docplanner.com/career"> Career </a></li>
                        <li className="department"><a href="#"> Department </a></li>
                    </ul>
                </nav>
        </div>

export default Header