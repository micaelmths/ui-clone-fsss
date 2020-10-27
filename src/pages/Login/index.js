import React from 'react';
import { FaUserAlt, FaLock } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import logoMissamiFsss from '../../images/logoMissamiFsss.png'

import './styles.css'

function Login() {

  return (
    <div className="container">
      <img src={logoMissamiFsss} alt="Faculdade Santissimo Sacramento"/>
      <h3>Área do aluno</h3>
      <form >
        <div className="input">
          <span><FaUserAlt color="#565456"/></span>
          <input type="text"placeholder="Usuário"/>
        </div>
        <div className="input">
          <span><FaLock color="#565456"/></span>
          <input type="password" placeholder="Senha"/>
        </div>
        <Link to='/dashboard'>Acessar</Link>
      </form>
        <p>Micael Matheus front-end developer</p>
    </div>
  );
}

export default Login;