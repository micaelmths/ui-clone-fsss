import React from 'react';

import logoMenuFsss from '../../images/logoMenuFsss.png'

import './styles.css'

function Navbar() {
  return (
    <div className="container-navbar">
      <img src={logoMenuFsss} alt=""/>
      <h3>SCIAWEB - DIS</h3>
      <ul className="nav-left"></ul>
      <ul className="nav-right"></ul>
    </div>
  );
}

export default Navbar;