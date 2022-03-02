import React from 'react';
import { useForm } from 'react-hook-form';
import './App.css';

const QuestionsPage = () => {
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
    <div className='qp-container'>
      <div className='qp-left'>
        <div className='qp-left-box'>
          <div className='qp-left-header-box'>
            <p className='qp-left-header'>
              Hey, Rocketeer, what are your coordinates?
            </p>
          </div>
          <div className='qp-input-container'>
            <form>
              <div className='qp-input'>
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
                {errors?.first_name && (
                  <p>{errors?.first_name?.message || 'Error!'}</p>
                )}
              </div>
              <div className='qp-input'>
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
                {errors?.last_name && (
                  <p>{errors?.last_name?.message || 'Error!'}</p>
                )}
              </div>
              <div className='qp-input'>
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
              <div>
                {errors?.email && <p>{errors?.email?.message || 'Error!'}</p>}
              </div>
              <div className='qp-input'>
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
              <div>
                {errors?.phone && <p>{errors?.phone?.message || 'Error!'}</p>}
              </div>
            </form>
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
