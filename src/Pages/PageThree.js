import React, { useState, useEffect } from 'react';

const getLocalStoragePageThree = () => {
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
  const [hadCovid, setHadCovid] = useState(getLocalStoragePageThree());
  const [vaccinated, setVaccinated] = useState(getLocalStoragePageThree_2());

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
            value='from_sairme_office'
            onChange={(event) =>
              setFormData({ ...formData, work_preference: event.target.value })
            }
          />
          <p className='qp-input-info'>From Sairme Office</p>
        </div>
        <div className='qp-input-radio-box'>
          <input type='radio' name='work_preference' />
          <p className='qp-input-info'>From Home</p>
        </div>
        <div className='qp-input-radio-box'>
          <input type='radio' name='work_preference' />
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
            checked={hadCovid ? true : false}
            value={true}
            onChange={() => setHadCovid(true)}
          />
          <p className='qp-input-info'>Yes</p>
        </div>
        <div className='qp-input-radio-box'>
          <input
            type='radio'
            checked={hadCovid ? false : true}
            value={false}
            onChange={() => setHadCovid(false)}
            name='had_covid'
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
              value={hadCovid ? formData.had_covid_at : null}
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
            value={true}
            checked={vaccinated ? true : false}
            onChange={() => setVaccinated(true)}
          />
          <p className='qp-input-info'>Yes</p>
        </div>
        <div className='qp-input-radio-box'>
          <input
            type='radio'
            name='vaccinated'
            value={false}
            checked={vaccinated ? false : true}
            onChange={() => setVaccinated(false)}
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
            <input className='qp-input' type='date' name='vaccinated_at' />
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default PageThree;
