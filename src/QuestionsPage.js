import React from 'react';
import './App.css';
const QuestionsPage = () => {
  return (
    <div className='qp-container'>
      <div className='qp-left'>
        <div className='qp-left-box'>
          <div className='qp-left-header-box'>
            <p className='qp-left-header'>
              Hey, Rocketeer, what are your coordinates?
            </p>
          </div>
          <div className='qp-input-container'>
            <div className='qp-input'>
              <input placeholder='First Name' />
            </div>
            <div className='qp-input'>
              <input placeholder='Last Name' />
            </div>
            <div className='qp-input'>
              <input placeholder='E Mail' />
            </div>
            <div className='qp-input'>
              <input placeholder='+995 5__ __ __ __' />
            </div>
          </div>
        </div>
      </div>

      <div className='qp-right'>
        <div className='qp-right-box'>
          <div className='qp-box-1'>
            <p className='qp-right-header'>Redberry Origins</p>
            <div className='qp-box-2'>
              <p className='qp-right-text'>
                You watch “What? Where? When?” Yeah. Our founders used to play
                it. That’s where they got a question about a famous American
                author and screenwriter Ray Bradbury. Albeit, our CEO Gaga
                Darsalia forgot the exact name and he answered Ray Redberry. And
                at that moment, a name for a yet to be born company was inspired
                - Redberry 😇
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionsPage;
