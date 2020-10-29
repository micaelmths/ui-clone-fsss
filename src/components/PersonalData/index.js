import React from 'react';

import perfil from '../../images/perfil.png';

import './styles.css'

function PersonalData() {
  return (
    <div className="container-personal-data">
      <img src={perfil} alt="Foto Perfil"/>
      <h2>Dados pessoais</h2>
      <table>
        <tr>
          <th>Curso:</th>
        </tr>
        <tr>
          <td>Sistemas de Informação - Bacharelado</td>
        </tr>
        <tr>
          <th>Nome:</th>
        </tr>
        <tr>
          <td>Micael Matheus Silva Ramos</td>
        </tr>
        <tr>
          <th>Matrícula:</th>
        </tr>
        <tr>
          <td>11710131</td>
        </tr>
        <tr>
          <th>Sexo:</th>
        </tr>
        <tr>
          <td>Masculino</td>
        </tr>
        <tr>
          <th>Raça:</th>
        </tr>
        <tr>
          <td>Branca</td>
        </tr>
        <tr>
          <th>RG:</th>
        </tr>
        <tr>
          <td>14.134.458-02</td>
        </tr>
        <tr>
          <th>CPF:</th>
        </tr>
        <tr>
          <td>858.879.495-03</td>
        </tr>
        <tr>
          <th>E-mail:</th>
        </tr>
        <tr>
          <td>micael.matheus@live.com</td>
        </tr>
        <tr>
          <th>Telefone/WhatsApp:</th>
        </tr>
        <tr>
          <td>(75) 9 9276-2860</td>
        </tr>
      <button>Salvar</button>
      </table>
    </div>
  );
}

export default PersonalData;