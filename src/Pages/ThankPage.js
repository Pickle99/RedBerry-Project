import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const ThankPage = ({ setPage }) => {
  useEffect(() => {
    const timer = () =>
      setTimeout(() => {
        setPage(0);
        // navigate('/')
      }, 3000);
    const timerId = timer();
    return () => {
      clearTimeout(timerId);
    };
  }, []);

  return <div className='thank-page'>Thanks for Joining 😊</div>;
};

export default ThankPage;
