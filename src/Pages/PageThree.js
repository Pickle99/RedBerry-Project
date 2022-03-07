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
  let vaccinated = localStorage.getItem('vaccinated');

  if (vaccinated) {
    return JSON.parse(localStorage.getItem('vaccinated'));
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
  const [vaccinated, setVaccinated] = useState(getLocalStoragePageThree_2());
  const [workPreference, setWorkPreference] = useState(
    getLocalStoragePageThree_3()
  );

  const [hadCovidValue, setHadCovidValue] = useState(
    getLocalStoragePageThree_4()
  );
  const [hadVaccineValue, setHadVaccineValue] = useState(
    getLocalStoragePageThree_5()
  );

  const [checkedYe, setCheckedYe] = useState(false);
  const [checkedNo, setCheckedNo] = useState(false);
  const [checkedYe2, setCheckedYe2] = useState(false);
  const [checkedNo2, setCheckedNo2] = useState(false);
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);

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
    if (workPreference == 'from_office') {
      setChecked1(true);
      setChecked2(false);
      setChecked3(false);
    } else if (workPreference == 'from_home') {
      setChecked1(false);
      setChecked2(true);
      setChecked3(false);
    } else {
      setChecked1(false);
      setChecked2(false);
      setChecked3(true);
    }
  }, [workPreference]);

  useEffect(() => {
    localStorage.setItem('hadCovid', JSON.stringify(hadCovid));
    setFormData({ ...formData, had_covid: hadCovid });
  }, [hadCovid]);

  useEffect(() => {
    localStorage.setItem('vaccinated', JSON.stringify(vaccinated));
    setFormData({ ...formData, vaccinated: vaccinated });
  }, [vaccinated]);

  useEffect(() => {
    localStorage.setItem('workPreference', JSON.stringify(workPreference));
    setFormData({ ...formData, work_preference: workPreference });
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
            checked={checked1}
            onChange={(e) => setWorkPreference(e.target.value)}
          />
          <p className='qp-input-info'>From Sairme Office</p>
        </div>
        <div className='qp-input-radio-box'>
          <input
            type='radio'
            name='work_preference'
            value='from_home'
            checked={checked2}
            onChange={(e) => setWorkPreference(e.target.value)}
          />
          <p className='qp-input-info'>From Home</p>
        </div>
        <div className='qp-input-radio-box'>
          <input
            type='radio'
            name='work_preference'
            value='hybrid'
            checked={checked3}
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
            checked={checkedYe}
            onChange={() => setHadCovid(true)}
          />
          <p className='qp-input-info'>Yes</p>
        </div>
        <div className='qp-input-radio-box'>
          <input
            type='radio'
            onClick={() => setFormData({ ...formData, had_covid_at: Date })}
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
            onChange={() => setVaccinated(true)}
            checked={checkedYe2}
          />
          <p className='qp-input-info'>Yes</p>
        </div>
        <div className='qp-input-radio-box'>
          <input
            type='radio'
            name='vaccinated'
            onClick={() => setFormData({ ...formData, vaccinated_at: Date })}
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
