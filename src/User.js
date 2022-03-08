import React, { useState, useEffect } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import './AppsPage.css';

const User = ({
  name,
  lastname,
  email,
  phone,
  workpref,
  hadcovid,
  hadcovidat,
  vaccinated,
  vaccinatedat,
}) => {
  const [showHide, setShowHide] = useState(false);

  const [dateCheck1, setDateCheck1] = useState(false);
  const [dateCheck2, setDateCheck2] = useState(false);

  function CheckerForWork(value) {
    if (value === workpref) {
      return true;
    } else return false;
  }

  function CheckerForCovid(value) {
    if (value === hadcovid) {
      return true;
    } else return false;
  }

  function CheckerForVaccine(value) {
    if (value === vaccinated) {
      return true;
    } else return false;
  }

  function DateChecker_1(value) {
    if (value) {
      return hadcovidat;
    } else return '';
  }

  function DateChecker_2(value) {
    if (value) {
      return vaccinatedat;
    } else {
      return '';
    }
  }

  useEffect(() => {
    if (DateChecker_2(vaccinatedat)) {
      setDateCheck2(true);
    } else setDateCheck2(false);
    console.log(dateCheck2);
  }, [showHide]);

  useEffect(() => {
    if (DateChecker_1(hadcovidat)) {
      setDateCheck1(true);
    } else setDateCheck1(false);
    console.log(dateCheck1);
  }, [showHide]);

  return (
    <div className='div-cont'>
      <nav>
        <label onClick={() => setShowHide(!showHide)} className='button'>
          1
          <span>
            <IoMdArrowDropdown />
          </span>
        </label>

        <div className={showHide ? 'menu' : 'hide'}>
          <div className='container-boxer'>
            <p className='PSCI-p'>User info</p>

            <div className='boxing'>
              <div className='boxing-box'>
                <p>First Name</p>
                <p>Last Name</p>
                <p>Email</p>
                <p>Phone</p>
              </div>
              <div className='boxing-box2'>
                <p className='boxing-fetch'>{name}</p>
                <p className='boxing-fetch'>{lastname}</p>
                <p className='boxing-fetch'>{email}</p>
                <p className='boxing-fetch'>{phone}</p>
              </div>
            </div>
          </div>
          <div className='container-boxer'>
            <p className='PSCI-p'>Covid Situation</p>
            <p className='p-headers'> how would you prefer to work?</p>

            <div className='qp-input-radio'>
              <div className='qp-input-radio-box'>
                <input
                  type='radio'
                  value='from_office'
                  defaultChecked={CheckerForWork('from_office')}
                  disabled={CheckerForWork('from_office')}
                />
                <p className='qp-input-info'>From Sairme Office</p>
              </div>
              <div className='qp-input-radio-box'>
                <input
                  type='radio'
                  value='from_home'
                  defaultChecked={CheckerForWork('from_home')}
                  disabled={CheckerForWork('from_home')}
                />
                <p className='qp-input-info'>From Home</p>
              </div>
              <div className='qp-input-radio-box'>
                <input
                  type='radio'
                  value='hybrid'
                  defaultChecked={CheckerForWork('hybrid')}
                  disabled={CheckerForWork('hybrid')}
                />
                <p className='qp-input-info'>Hybrid</p>
              </div>
            </div>
            <p className='p-headers'> Did you have covid 19?</p>
            <div className='qp-input-radio'>
              <div className='qp-input-radio-box'>
                <input
                  type='radio'
                  value={true}
                  defaultChecked={CheckerForCovid(true)}
                  disabled={CheckerForCovid(true)}
                />
                <p className='qp-input-info'>Yes</p>
              </div>
              <div className='qp-input-radio-box'>
                <input
                  type='radio'
                  value={false}
                  defaultChecked={CheckerForCovid(false)}
                  disabled={CheckerForCovid(false)}
                />
                <p className='qp-input-info'>No</p>
              </div>
            </div>
            <div className={dateCheck1 ? 'empty' : 'hide'}>
              <p className='p-headers'> When did you have covid 19?</p>
              <div className='qp-input-radio'>
                <div>
                  <input
                    className='qp-input'
                    type='date'
                    value={DateChecker_1(hadcovidat)}
                    disabled
                  />
                </div>
              </div>
            </div>
            <p className='p-headers'>Have you been vaccinated?</p>
            <div className='qp-input-radio'>
              <div className='qp-input-radio-box'>
                <input
                  type='radio'
                  value={true}
                  defaultChecked={CheckerForVaccine(true)}
                  disabled={CheckerForVaccine(true)}
                />
                <p className='qp-input-info'>Yes</p>
              </div>
              <div className='qp-input-radio-box'>
                <input
                  type='radio'
                  value={false}
                  defaultChecked={CheckerForVaccine(false)}
                  disabled={CheckerForVaccine(false)}
                />
                <p className='qp-input-info'>No</p>
              </div>
            </div>
            <div className={dateCheck2 ? 'empty' : 'hide'}>
              <p className='p-headers'> When did you get covid vaccine?</p>
              <div className='qp-input-radio'>
                <div>
                  <input
                    className='qp-input'
                    type='date'
                    value={DateChecker_2(vaccinatedat)}
                    disabled
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default User;
