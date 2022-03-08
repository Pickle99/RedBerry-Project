import React, { useEffect } from 'react';

const ThankPage = ({ setPage }) => {
  useEffect(() => {
    const timer = () =>
      setTimeout(() => {
        setPage(0);
      }, 3000);
    const timerId = timer();
    return () => {
      clearTimeout(timerId);
    };
  }, []);

  return <div className='thank-page'>Thanks for Joining 😊</div>;
};

export default ThankPage;
