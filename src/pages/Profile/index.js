import React from 'react';
import Navbar from '../../components/Navbar';
import PersonalData from '../../components/PersonalData';

import './styles.css'

function Profile() {
  return (
    <div className="container-profile">
      <Navbar />
      <PersonalData />
    </div>
  );
}

export default Profile;