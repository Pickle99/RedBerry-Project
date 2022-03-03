import React from 'react';
import { useForm } from 'react-hook-form';
import '../App.css';

const PageOne = () => {
  const {
    register,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
  });
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  const geoNumberRegex =
    /(((\+){1}995){1})? ?-?[56789]{1}[0-9]{9}$/gm; /* incomplete, im not strong in regex-s, i create this one by myself but its doesnt work correctly ;d im sorry, maybe will change this in next commits if will find answer */

  return (
    <>
      <div className='skill-item qp-input'>
        <input
          {...register('first_name', {
            required: 'Please enter you First Name',
            minLength: {
              value: 2,
              message: 'Enter at least 2 symbols',
            },
          })}
          type='text'
          placeholder='First Name'
        />
      </div>
      <div>
        {errors?.first_name && <p>{errors?.first_name?.message || 'Error!'}</p>}
      </div>
      <div className='qp-input skill-item'>
        <input
          {...register('last_name', {
            required: 'Please enter you Last Name',
            minLength: {
              value: 2,
              message: 'Enter at least 2 symbols',
            },
          })}
          type='text'
          placeholder='Last Name'
        />
      </div>
      <div>
        {errors?.last_name && <p>{errors?.last_name?.message || 'Error!'}</p>}
      </div>
      <div className='qp-input skill-item'>
        <input
          {...register('email', {
            required: 'Please enter you E Mail',
            pattern: {
              value: emailRegex,
              message: 'invalid email address',
            },
          })}
          type='text'
          placeholder='E Mail'
        />
      </div>
      <div>{errors?.email && <p>{errors?.email?.message || 'Error!'}</p>}</div>
      <div className='qp-input skill-item'>
        <input
          {...register('phone', {
            required: true,
            pattern: {
              value: geoNumberRegex,
              message: 'invalid Georgian phone number format',
            },
          })}
          type='text'
          placeholder='+995 5__ __ __ __'
        />
      </div>
      <div>{errors?.phone && <p>{errors?.phone?.message || 'Error!'}</p>}</div>
    </>
  );
};

export default PageOne;
