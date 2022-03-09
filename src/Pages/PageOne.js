import React, { useState, useEffect } from 'react';
import '../App.css';
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io';

const PageOne = ({
  formData,
  setFormData,
  phoneValue,
  setPhoneValue,
  opacityValue_1,
  opacityValue_2,
  opacityValue_3,
  opacityValue_4,
  setPage,
}) => {
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  const geoNumberRegex = /[+]9955/g;

  const validate = (values) => {
    const errors = {};
    if (!values.first_name) {
      errors.first_name = 'First name is required';
    }
    if (!values.last_name) {
      errors.last_name = 'Last name is required';
    }
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!emailRegex.test(values.email)) {
      errors.email = 'This is not a valid email format';
    }
    if (!geoNumberRegex.test(values.phone) && values.phone.length > 0) {
      errors.phone =
        'Phone number format is not valid for Georgia (ex:+9955..)';
    }
    return errors;
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0) {
      setIsSubmit(true);
    }
  }, [formErrors]);

  useEffect(() => {
    localStorage.setItem('phoneValue', JSON.stringify(phoneValue));
    if (phoneValue) {
      return setFormData({ ...formData, phone: phoneValue });
    } else return setFormData({ ...formData, phone: '' });
  }, [phoneValue]);

  const handleNext = () => {
    setFormErrors(validate(formData));
  };

  const CirclePage = () => {
    if (
      !(
        formData.first_name &&
        formData.last_name &&
        emailRegex.test(formData.email)
      )
    ) {
      return true;
    } else return false;
  };

  useEffect(() => {
    if (isSubmit) {
      return setPage((curr) => curr + 1);
    } else return setIsSubmit(false);
  }, [isSubmit]);

  return (
    <>
      <div className='qp-container'>
        <div className='qp-left'>
          <div className='qp-left-box'>
            <div className='qp-left-header-box qp-left-header'>
              Hey, Rocketeer, what are your coordinates?
            </div>
            <div className='qp-input-container'>
              <form>
                <div className='skill-item qp-input'>
                  <input
                    name='first_name'
                    type='text'
                    placeholder='First Name'
                    value={formData.first_name}
                    onChange={(event) =>
                      setFormData({
                        ...formData,
                        first_name: event.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <p>{formErrors.first_name}</p>
                </div>
                <div className='qp-input skill-item'>
                  <input
                    name='last_name'
                    type='text'
                    placeholder='Last Name'
                    value={formData.last_name}
                    onChange={(event) =>
                      setFormData({
                        ...formData,
                        last_name: event.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <p>{formErrors.last_name}</p>
                </div>
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
                <div>
                  <p>{formErrors.email}</p>
                </div>
                <div className='qp-input skill-item'>
                  <input
                    type='text'
                    placeholder='+995 5__ __ __ __'
                    value={phoneValue}
                    onChange={(event) => setPhoneValue(event.target.value)}
                  />
                </div>
                <p>{formErrors.phone}</p>
              </form>
            </div>
          </div>
          <div className='qp-button-box'>
            <button className='button-prev'>
              <IoIosArrowDropleft />
            </button>

            <div className='circle-container'>
              <button
                style={{ opacity: opacityValue_1 }}
                className='circle'
                disabled={CirclePage()}
              ></button>
            </div>
            <div className='circle-container'>
              <button
                onClick={() => setPage(1)}
                style={{ opacity: opacityValue_2 }}
                className='circle'
                disabled={CirclePage()}
              ></button>
            </div>
            <div className='circle-container'>
              <button
                onClick={() => setPage(2)}
                style={{ opacity: opacityValue_3 }}
                className='circle'
                disabled={CirclePage()}
              ></button>
            </div>
            <div className='circle-container'>
              <button
                onClick={() => setPage(3)}
                style={{ opacity: opacityValue_4 }}
                className='circle'
                disabled={CirclePage()}
              ></button>
            </div>
            <div className='circle-container'>
              <button
                onClick={() => setPage(4)}
                style={{ opacity: 0.1 }}
                className='circle'
                disabled={CirclePage()}
              ></button>
            </div>

            <button onClick={handleNext} className='button-next'>
              <IoIosArrowDropright />
            </button>
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
                  Darsalia forgot the exact name and he answered Ray Redberry.
                  And at that moment, a name for a yet to be born company was
                  inspired - Redberry 😇
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageOne;
