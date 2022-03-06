import React, { useState, useEffect } from 'react';

const getLocalStoragePageThree_3 = () => {
  let hadCovid = localStorage.getItem('hadCovid');

  if (hadCovid) {
    return JSON.parse(localStorage.getItem('hadCovid'));
  } else {
    return false;
  }
};
const getLocalStoragePageThree_2 = () => {
  let vaccinated = localStorage.getItem('vaccinated');

  if (vaccinated) {
    return JSON.parse(localStorage.getItem('vaccinated'));
  } else {
    return false;
  }
};

const PageThree = ({ formData, setFormData }) => {
  const [hadCovid, setHadCovid] = useState(getLocalStoragePageThree_3());
  const [vaccinated, setVaccinated] = useState(getLocalStoragePageThree_2());
  const [checkedYe, setCheckedYe] = useState(false);
  const [checkedNo, setCheckedNo] = useState(false);
  const [checkedYe2, setCheckedYe2] = useState(false);
  const [checkedNo2, setCheckedNo2] = useState(false);

  useEffect(() => {
    if (hadCovid === true) {
      setCheckedNo(false);
      setCheckedYe(true);
    } else if (hadCovid === false) {
      setCheckedYe(false);
      setCheckedNo(true);
    } else {
      setCheckedYe(false);
      setCheckedNo(false);
    }
  }, [hadCovid]);

  useEffect(() => {
    if (vaccinated === true) {
      setCheckedNo2(false);
      setCheckedYe2(true);
    } else if (vaccinated === false) {
      setCheckedYe2(false);
      setCheckedNo2(true);
    } else {
      setCheckedYe2(false);
      setCheckedNo2(false);
    }
  }, [vaccinated]);

  useEffect(() => {
    localStorage.setItem('hadCovid', JSON.stringify(hadCovid));
    setFormData({ ...formData, had_covid: hadCovid });
  }, [hadCovid]);

  useEffect(() => {
    localStorage.setItem('vaccinated', JSON.stringify(vaccinated));
    setFormData({ ...formData, vaccinated: vaccinated });
  }, [vaccinated]);

  return (
    <>
      <p className='qp-input-headers'>How would you prefer to work</p>
      <div className='qp-input-radio'>
        <div className='qp-input-radio-box'>
          <input
            type='radio'
            name='work_preference'
            value='from_office'
            onChange={(event) =>
              setFormData({ ...formData, work_preference: event.target.value })
            }
          />
          <p className='qp-input-info'>From Sairme Office</p>
        </div>
        <div className='qp-input-radio-box'>
          <input
            type='radio'
            name='work_preference'
            value='from_home'
            onChange={(event) =>
              setFormData({ ...formData, work_preference: event.target.value })
            }
          />
          <p className='qp-input-info'>From Home</p>
        </div>
        <div className='qp-input-radio-box'>
          <input
            type='radio'
            name='work_preference'
            value='hybrid'
            onChange={(event) =>
              setFormData({ ...formData, work_preference: event.target.value })
            }
          />
          <p className='qp-input-info'>Hybrid</p>
        </div>
      </div>
      <div></div>
      <p className='qp-input-headers'>{'Did you contact covid 19? :('} </p>
      <div className='qp-input-radio'>
        <div className='qp-input-radio-box'>
          <input
            type='radio'
            name='had_covid'
            checked={checkedYe}
            onChange={() => setHadCovid(true)}
          />
          <p className='qp-input-info'>Yes</p>
        </div>
        <div className='qp-input-radio-box'>
          <input
            type='radio'
            onClick={() => setFormData({ ...formData, had_covid_at: '' })}
            onChange={() => setHadCovid(false)}
            name='had_covid'
            checked={checkedNo}
          />
          <p className='qp-input-info'>No</p>
        </div>
      </div>
      <div className={hadCovid ? 'empty' : 'hide'}>
        <p className='qp-input-info'>When?</p>
        <div className='qp-input-radio'>
          <div>
            <input
              className='qp-input'
              type='date'
              name='had_covid_at'
              value={formData.had_covid_at}
              onChange={(event) =>
                setFormData({ ...formData, had_covid_at: event.target.value })
              }
            />
          </div>
        </div>
      </div>
      <div></div>
      <p className='qp-input-headers'>Have you been vaccinated?</p>
      <div className='qp-input-radio'>
        <div className='qp-input-radio-box'>
          <input
            type='radio'
            name='vaccinated'
            onChange={() => setVaccinated(true)}
            checked={checkedYe2}
          />
          <p className='qp-input-info'>Yes</p>
        </div>
        <div className='qp-input-radio-box'>
          <input
            type='radio'
            name='vaccinated'
            onClick={() => setFormData({ ...formData, vaccinated_at: '' })}
            onChange={() => setVaccinated(false)}
            checked={checkedNo2}
          />
          <p className='qp-input-info'>No</p>
        </div>
      </div>
      <div className={vaccinated ? 'empty' : 'hide'}>
        <p className='qp-input-headers'>
          When did you get your last covid vaccine?
        </p>
        <div className='qp-input-radio'>
          <div>
            <input
              className='qp-input'
              value={formData.vaccinated_at}
              onChange={(event) =>
                setFormData({ ...formData, vaccinated_at: event.target.value })
              }
              type='date'
              name='vaccinated_at'
            />
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default PageThree;
