import React, { useState, useEffect } from 'react';

const getLocalStoragePageThree_1 = () => {
  let hadCovid = localStorage.getItem('hadCovid');

  if (hadCovid) {
    return JSON.parse(localStorage.getItem('hadCovid'));
  } else {
    return false;
  }
};

const getLocalStoragePageThree_2 = () => {
  let hadVaccinated = localStorage.getItem('hadVaccinated');

  if (hadVaccinated) {
    return JSON.parse(localStorage.getItem('hadVaccinated'));
  } else {
    return false;
  }
};

const getLocalStoragePageThree_3 = () => {
  let workPreference = localStorage.getItem('workPreference');

  if (workPreference) {
    return JSON.parse(localStorage.getItem('workPreference'));
  } else {
    return '';
  }
};

const getLocalStoragePageThree_4 = () => {
  let hadCovidValue = localStorage.getItem('hadCovidValue');

  if (hadCovidValue) {
    return JSON.parse(localStorage.getItem('hadCovidValue'));
  } else {
    return '';
  }
};

const getLocalStoragePageThree_5 = () => {
  let hadVaccineValue = localStorage.getItem('hadVaccineValue');

  if (hadVaccineValue) {
    return JSON.parse(localStorage.getItem('hadVaccineValue'));
  } else {
    return '';
  }
};

const PageThree = ({ formData, setFormData }) => {
  const [hadCovid, setHadCovid] = useState(getLocalStoragePageThree_1());
  const [hadVaccinated, setHadVaccinated] = useState(
    getLocalStoragePageThree_2()
  );
  const [workPreference, setWorkPreference] = useState(
    getLocalStoragePageThree_3()
  );

  const [hadCovidValue, setHadCovidValue] = useState(
    getLocalStoragePageThree_4()
  );
  const [hadVaccineValue, setHadVaccineValue] = useState(
    getLocalStoragePageThree_5()
  );

  const [checkedValues, setCheckedValues] = useState({
    workPreferenceYes1: false,
    workPreferenceNo1: false,
    workPreferenceNo2: false,
  });

  useEffect(() => {
    localStorage.setItem('hadCovid', JSON.stringify(hadCovid));
    setFormData({ ...formData, had_covid: hadCovid });
  }, [hadCovid]);

  useEffect(() => {
    localStorage.setItem('hadVaccinated', JSON.stringify(hadVaccinated));
    setFormData({ ...formData, vaccinated: hadVaccinated });
  }, [hadVaccinated]);

  useEffect(() => {
    localStorage.setItem('workPreference', JSON.stringify(workPreference));
    setFormData({ ...formData, work_preference: workPreference });

    if (workPreference == 'from_office') {
      setCheckedValues({
        ...checkedValues,
        workPreferenceYes1: true,
        workPreferenceNo1: false,
        workPreferenceNo2: false,
      });
    } else if (workPreference == 'from_home') {
      setCheckedValues({
        ...checkedValues,
        workPreferenceYes1: false,
        workPreferenceNo1: true,
        workPreferenceNo2: false,
      });
    } else if (workPreference == 'hybrid') {
      setCheckedValues({
        ...checkedValues,
        workPreferenceYes1: false,
        workPreferenceNo1: false,
        workPreferenceNo2: true,
      });
    } else {
      setCheckedValues({
        ...checkedValues,
        workPreferenceYes1: false,
        workPreferenceNo1: false,
        workPreferenceNo2: false,
      });
    }
  }, [workPreference]);

  useEffect(() => {
    localStorage.setItem('hadCovidValue', JSON.stringify(hadCovidValue));
    setFormData({ ...formData, had_covid_at: hadCovidValue });
  }, [hadCovidValue]);

  useEffect(() => {
    localStorage.setItem('hadVaccineValue', JSON.stringify(hadVaccineValue));
    setFormData({ ...formData, vaccinated_at: hadVaccineValue });
  }, [hadVaccineValue]);

  return (
    <>
      <p className='qp-input-headers'>How would you prefer to work</p>
      <div className='qp-input-radio'>
        <div className='qp-input-radio-box'>
          <input
            type='radio'
            name='work_preference'
            value='from_office'
            checked={checkedValues.workPreferenceYes1}
            onChange={(e) => setWorkPreference(e.target.value)}
          />
          <p className='qp-input-info'>From Sairme Office</p>
        </div>
        <div className='qp-input-radio-box'>
          <input
            type='radio'
            name='work_preference'
            value='from_home'
            checked={checkedValues.workPreferenceNo1}
            onChange={(e) => setWorkPreference(e.target.value)}
          />
          <p className='qp-input-info'>From Home</p>
        </div>
        <div className='qp-input-radio-box'>
          <input
            type='radio'
            name='work_preference'
            value='hybrid'
            checked={checkedValues.workPreferenceNo2}
            onChange={(e) => setWorkPreference(e.target.value)}
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
            onChange={() => setHadCovid(true)}
            checked={hadCovid}
          />
          <p className='qp-input-info'>Yes</p>
        </div>
        <div className='qp-input-radio-box'>
          <input
            type='radio'
            onClick={() => setFormData({ ...formData, had_covid_at: Date })}
            onChange={() => setHadCovid(false)}
            name='had_covid'
            checked={!hadCovid}
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
              value={hadCovidValue}
              onChange={(e) => setHadCovidValue(e.target.value)}
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
            onChange={() => setHadVaccinated(true)}
            checked={hadVaccinated}
          />
          <p className='qp-input-info'>Yes</p>
        </div>
        <div className='qp-input-radio-box'>
          <input
            type='radio'
            name='vaccinated'
            onClick={() => setFormData({ ...formData, vaccinated_at: Date })}
            onChange={() => setHadVaccinated(false)}
            checked={!hadVaccinated}
          />
          <p className='qp-input-info'>No</p>
        </div>
      </div>
      <div className={hadVaccinated ? 'empty' : 'hide'}>
        <p className='qp-input-headers'>
          When did you get your last covid vaccine?
        </p>
        <div className='qp-input-radio'>
          <div>
            <input
              className='qp-input'
              type='date'
              name='vaccinated_at'
              value={hadVaccineValue}
              onChange={(e) => setHadVaccineValue(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default PageThree;
