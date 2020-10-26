import React from 'react';

import logoMissamiFsss from '../../images/logoMissamiFsss.png'

import './styles.css'

function Login() {
  return (
    <div className="container">
      <img src={logoMissamiFsss} alt="Faculdade Santissimo Sacramento"/>
      <h3>Área do aluno</h3>
      <form>
        <div className="input">
          <span></span>
          <input type="text"placeholder="Usuário"/>
        </div>
        <div className="input">
          <span></span>
          <input type="password" placeholder="Senha"/>
        </div>
        <button>Acessar</button>
      </form>
        <p>Micael Matheus front end developer</p>
    </div>
  );
}

export default Login;