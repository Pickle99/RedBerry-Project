import React from 'react';
import './App.css';

const LandingPage = () => {
  const rocketman = require('./images/rocketman.png');
  return (
    <div className='container'>
      <div className='container-box'>
        <div className='box-1'>
          <h1>Welcome Rocketeer !</h1>
        </div>
        <div className='box-2'>
          <p>Start Questionnaire</p>
        </div>
        <div className='box-3'>
          <p> Submitted Applications</p>
        </div>
        <img src={rocketman} alt='img' />
      </div>
    </div>
  );
};

export default LandingPage;
