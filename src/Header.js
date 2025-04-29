import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="header-container">
      <div className="header-left">
        <h1>Christopher Lew</h1>
      </div>
      <div className="header-right">
        <img src={process.env.PUBLIC_URL + '/dab-emoji.png'} alt="Christopher Lew" />
      </div>
    </div>
  );
}

export default Header;
