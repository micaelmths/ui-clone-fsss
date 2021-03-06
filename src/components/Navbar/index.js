import React from 'react';
import { Link } from 'react-router-dom'
import { FaGraduationCap, FaCaretDown, FaGlobeAmericas, FaCogs } from 'react-icons/fa'

import logoMenuFsss from '../../images/logoMenuFsss.png'
import perfil from '../../images/perfil.png'

import './styles.css'

function Navbar() {
  return (
    <div className="container-navbar">
      <Link to='/dashboard'>
        <img src={logoMenuFsss} alt="Faculdade Santíssimo Sacramento"/>
        <h3>SCIAWEB - DIS</h3>
      </Link>
      <ul className="nav-left">
        <li>
          <Link><FaGraduationCap /><p>Dados Acadêmicos</p><FaCaretDown /></Link>
        </li>
        <li>
          <Link><FaGlobeAmericas /> <p>F.SS.S Virtual</p> <FaCaretDown /></Link>
        </li>
        <li>
          <Link><FaCogs /> <p>Sistema</p> <FaCaretDown /></Link>
        </li>
      </ul>
      <ul className="nav-right">
        <Link to='/profile'>
          <p>Micael</p>
          <img src={perfil} alt="Micael"/>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;