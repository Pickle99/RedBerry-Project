import React from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';
const LandingPage = () => {
  const rocketman = require('./images/rocketman.png');
  const navigate = useNavigate();

  const startSurvey = () => {
    navigate('/survey');
  };

  return (
    <div className='container'>
      <div className='container-box'>
        <div className='box-1'>
          <h1>Welcome Rocketeer !</h1>
        </div>
        <div className='box-2'>
          <p onClick={startSurvey}>Start Questionnaire</p>
        </div>
        <div className='box-3'>
          <span>
            <p>Submitted applications</p>
          </span>
        </div>
        <img src={rocketman} alt='img' />
      </div>
    </div>
  );
};

export default LandingPage;
