import React, { useState, useEffect } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import ApplicationsPage from './ApplicationsPage';
import './AppsPage.css';
import UserSkills from './UserSkills';

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
  skills,
  devtalks,
  devtalktopic,
  special,
  i,
}) => {
  const [showHide, setShowHide] = useState(false);
  const [phoneCheck, setPhoneCheck] = useState(false);
  const [dateCheck1, setDateCheck1] = useState(false);
  const [dateCheck2, setDateCheck2] = useState(false);

  const [rotate, setRotate] = useState(false);

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

  function CheckerForDevtalks(value) {
    if (value === devtalks) {
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
  }, []);

  useEffect(() => {
    if (DateChecker_1(hadcovidat)) {
      setDateCheck1(true);
    } else setDateCheck1(false);
  }, []);

  useEffect(() => {
    if (phone) {
      setPhoneCheck(true);
    } else setPhoneCheck(false);
  }, []);

  const labelClicker = () => {
    setShowHide(!showHide);
    setRotate(!rotate);
  };

  return (
    <div className='div-cont'>
      <nav>
        <label onClick={labelClicker} className='button'>
          {i + 1}
          <span>
            {rotate ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
          </span>
        </label>

        <div className={showHide ? 'menu' : 'hide'}>
          <div className='container-boxer'>
            <div className='lefter'>
              <div className='container-boxer-2'>
                <div className='box-a'>
                  <p className='PSCI-p'>User info</p>
                  <div className='boxing'>
                    <div className='boxing-box'>
                      <p>First Name</p>
                      <p>Last Name</p>
                      <p>Email</p>
                      <p className={phoneCheck ? 'empty' : 'hide'}>Phone</p>
                    </div>
                    <div className='boxing-box2'>
                      <p className='boxing-fetch'>{name}</p>
                      <p className='boxing-fetch'>{lastname}</p>
                      <p className='boxing-fetch'>{email}</p>
                      <p className='boxing-fetch'>{phone}</p>
                    </div>
                  </div>
                </div>

                <p className='PSCI-p'>Covid Situation</p>
                <p className='p-headers'> how would you prefer to work?</p>

                <div className='qp-input-radio'>
                  <div className='qp-input-radio-box'>
                    <input
                      type='radio'
                      value='from_office'
                      defaultChecked={CheckerForWork('from_office')}
                      disabled
                    />
                    <p className='qp-input-info'>From Sairme Office</p>
                  </div>
                  <div className='qp-input-radio-box'>
                    <input
                      type='radio'
                      value='from_home'
                      defaultChecked={CheckerForWork('from_home')}
                      disabled
                    />
                    <p className='qp-input-info'>From Home</p>
                  </div>
                  <div className='qp-input-radio-box'>
                    <input
                      type='radio'
                      value='hybrid'
                      defaultChecked={CheckerForWork('hybrid')}
                      disabled
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
                      disabled
                    />
                    <p className='qp-input-info'>Yes</p>
                  </div>
                  <div className='qp-input-radio-box'>
                    <input
                      type='radio'
                      value={false}
                      defaultChecked={CheckerForCovid(false)}
                      disabled
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
                      disabled
                    />
                    <p className='qp-input-info'>Yes</p>
                  </div>
                  <div className='qp-input-radio-box'>
                    <input
                      type='radio'
                      value={false}
                      defaultChecked={CheckerForVaccine(false)}
                      disabled
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
            <div className='right'>
              <div className='box-a'>
                <p className='PSCI-p'>Skillset</p>

                <div className='boxing'>
                  <div className='boxing-box'>
                    {skills.map((skill) => {
                      return <UserSkills key={skill.id} id={skill.id} />;
                    })}
                  </div>
                  <div className='boxing-box2'>
                    {skills.map((skill) => {
                      return (
                        <p className='boxing-fetch' key={skill.id}>
                          Years of Experience: {skill.experience}
                        </p>
                      );
                    })}
                  </div>
                </div>
                <div className='box-insights'>
                  <p className='PSCI-p'>Insights</p>
                  <p className='p-headers'>
                    Would you attend devtalks and maybe also organize your own?
                  </p>
                  <div className='qp-input-radio'>
                    <div className='qp-input-radio-box'>
                      <input
                        type='radio'
                        value={true}
                        defaultChecked={CheckerForDevtalks(true)}
                        disabled
                      />
                      <p className='qp-input-info'>Yes</p>
                    </div>
                    <div className='qp-input-radio-box'>
                      <input
                        type='radio'
                        value={false}
                        defaultChecked={CheckerForDevtalks(false)}
                        disabled
                      />
                      <p className='qp-input-info'>No</p>
                    </div>
                  </div>
                  <p className='p-headers'>
                    What would you speak about at Devtalk?
                  </p>
                  <div className='devtalk-box'>
                    <div className='qp-input-textarea'>
                      <textarea
                        cols='50'
                        rows='4'
                        value={devtalktopic}
                        disabled
                      ></textarea>
                    </div>
                  </div>
                  <p className='p-headers'>Tell us something special</p>
                  <div className='devtalk-box'>
                    <div className='qp-input-textarea'>
                      <textarea
                        cols='50'
                        rows='1'
                        value={special}
                        disabled
                      ></textarea>
                    </div>
                  </div>
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
