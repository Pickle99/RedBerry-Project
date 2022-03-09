import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const ThankPage = ({ setPage }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = () =>
      setTimeout(() => {
        setPage(0);
        // navigate('/'); uncomplete
      }, 3000);
    const timerId = timer();
    return () => {
      clearTimeout(timerId);
    };
  }, []);

  return <div className='thank-page'>Thanks for Joining 😊</div>;
};

export default ThankPage;
