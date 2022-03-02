import React from 'react';
import { useForm } from 'react-hook-form';
const PageTwo = () => {
  return (
    <>
      <div className='qp-input'>
        <input type='text' placeholder='First Name' />
      </div>
      <div></div>
      <div className='qp-input'>
        <input type='text' placeholder='Last Name' />
      </div>
    </>
  );
};

export default PageTwo;
