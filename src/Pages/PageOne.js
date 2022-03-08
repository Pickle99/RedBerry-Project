import React, { useState, useEffect } from 'react';
import '../App.css';

const PageOne = ({ formData, setFormData, phoneValue, setPhoneValue }) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  const geoNumberRegex = /(((\+){1}995){1})? ?-?[56789]{1}[0-9]{9}$/gm;

  useEffect(() => {
    localStorage.setItem('phoneValue', JSON.stringify(phoneValue));
    if (phoneValue) {
      return setFormData({ ...formData, phone: phoneValue });
    } else return setFormData({ ...formData, phone: String });
  }, [phoneValue]);

  return (
    <>
      <div className='skill-item qp-input'>
        <input
          name='first_name'
          type='text'
          placeholder='First Name'
          value={formData.first_name}
          onChange={(event) =>
            setFormData({ ...formData, first_name: event.target.value })
          }
        />
      </div>
      <div></div>
      <div className='qp-input skill-item'>
        <input
          name='last_name'
          type='text'
          placeholder='Last Name'
          value={formData.last_name}
          onChange={(event) =>
            setFormData({ ...formData, last_name: event.target.value })
          }
        />
      </div>
      <div></div>
      <div className='qp-input skill-item'>
        <input
          type='text'
          placeholder='E Mail'
          value={formData.email}
          onChange={(event) =>
            setFormData({ ...formData, email: event.target.value })
          }
        />
      </div>

      <div className='qp-input skill-item'>
        <input
          type='text'
          placeholder='+995 5__ __ __ __'
          value={phoneValue}
          onChange={(event) => setPhoneValue(event.target.value)}
        />
      </div>
    </>
  );
};

export default PageOne;
