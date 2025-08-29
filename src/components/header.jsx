import React from 'react';
import logo from '../../resources/images/Acme-corp.png';

const Header = () => (
    <div className="headerContainer">
        <div className="logoContent">
            <img className="headerImg" src={logo} alt="logo img"/>            
        </div>
        <div className="titleContent">
            <h1 className="headerText">ACME Discussions</h1>
        </div>
    </div>
)

export default Header;