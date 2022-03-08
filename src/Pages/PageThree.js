import React, { useState, useEffect } from 'react';

const PageThree = ({
  formData,
  setFormData,
  workPreference,
  setWorkPreference,
  hadCovid,
  setHadCovid,
  hadVaccinated,
  setHadVaccinated,
  hadVaccineValue,
  hadCovidValue,
  setHadVaccineValue,
  setHadCovidValue,
}) => {
  const [checkedValuesWork, setCheckedValuesWork] = useState({
    workPreferenceYes1: false,
    workPreferenceNo1: false,
    workPreferenceNo2: false,
  });
  const [checkedValuesCovid, setCheckedValuesCovid] = useState({
    yes: false,
    no: false,
  });

  const [checkedValuesVaccine, setCheckedValuesVaccine] = useState({
    yes: false,
    no: false,
  });

  useEffect(() => {
    localStorage.setItem('workPreference', JSON.stringify(workPreference));
    setFormData({ ...formData, work_preference: workPreference });

    // For work input

    if (workPreference == 'from_office') {
      setCheckedValuesWork({
        ...checkedValuesWork,
        workPreferenceYes1: true,
        workPreferenceNo1: false,
        workPreferenceNo2: false,
      });
    } else if (workPreference == 'from_home') {
      setCheckedValuesWork({
        ...checkedValuesWork,
        workPreferenceYes1: false,
        workPreferenceNo1: true,
        workPreferenceNo2: false,
      });
    } else if (workPreference == 'hybrid') {
      setCheckedValuesWork({
        ...checkedValuesWork,
        workPreferenceYes1: false,
        workPreferenceNo1: false,
        workPreferenceNo2: true,
      });
    } else {
      setCheckedValuesWork({
        ...checkedValuesWork,
        workPreferenceYes1: false,
        workPreferenceNo1: false,
        workPreferenceNo2: false,
      });
    }
  }, [workPreference]);

  // end of work input

  // For covid input
  useEffect(() => {
    localStorage.setItem('hadCovid', JSON.stringify(hadCovid));
    setFormData({ ...formData, had_covid: hadCovid });
    if (hadCovid === true) {
      setCheckedValuesCovid({
        ...checkedValuesCovid,
        yes: true,
        no: false,
      });
    } else if (hadCovid === false) {
      setCheckedValuesCovid({
        ...checkedValuesCovid,
        yes: false,
        no: true,
      });
    } else {
      setCheckedValuesCovid({
        ...checkedValuesCovid,
        yes: false,
        no: false,
      });
    }
  }, [hadCovid]);

  // end of covid input

  // For vaccine input
  useEffect(() => {
    localStorage.setItem('hadVaccinated', JSON.stringify(hadVaccinated));
    setFormData({ ...formData, vaccinated: hadVaccinated });
    if (hadVaccinated === true) {
      setCheckedValuesVaccine({
        ...checkedValuesVaccine,
        yes: true,
        no: false,
      });
    } else if (hadVaccinated === false) {
      setCheckedValuesVaccine({
        ...checkedValuesVaccine,
        yes: false,
        no: true,
      });
    } else {
      setCheckedValuesVaccine({
        ...checkedValuesVaccine,
        yes: false,
        no: false,
      });
    }
  }, [hadVaccinated]);

  // end of vaccine input

  useEffect(() => {
    localStorage.setItem('hadCovidValue', JSON.stringify(hadCovidValue));
    if (hadCovidValue) {
      setFormData({ ...formData, had_covid_at: hadCovidValue });
    } else {
      setFormData({ ...formData, had_covid_at: Date });
    }
  }, [hadCovidValue]);

  useEffect(() => {
    localStorage.setItem('hadVaccineValue', JSON.stringify(hadVaccineValue));

    if (hadVaccineValue) {
      setFormData({ ...formData, vaccinated_at: hadVaccineValue });
    } else {
      setFormData({ ...formData, vaccinated_at: Date });
    }
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
            checked={checkedValuesWork.workPreferenceYes1}
            onChange={(e) => setWorkPreference(e.target.value)}
          />
          <p className='qp-input-info'>From Sairme Office</p>
        </div>
        <div className='qp-input-radio-box'>
          <input
            type='radio'
            name='work_preference'
            value='from_home'
            checked={checkedValuesWork.workPreferenceNo1}
            onChange={(e) => setWorkPreference(e.target.value)}
          />
          <p className='qp-input-info'>From Home</p>
        </div>
        <div className='qp-input-radio-box'>
          <input
            type='radio'
            name='work_preference'
            value='hybrid'
            checked={checkedValuesWork.workPreferenceNo2}
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
            checked={checkedValuesCovid.yes}
          />
          <p className='qp-input-info'>Yes</p>
        </div>
        <div className='qp-input-radio-box'>
          <input
            type='radio'
            onClick={() => setFormData({ ...formData, had_covid_at: Date })}
            onChange={() => setHadCovid(false)}
            name='had_covid'
            checked={checkedValuesCovid.no}
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
            checked={checkedValuesVaccine.yes}
          />
          <p className='qp-input-info'>Yes</p>
        </div>
        <div className='qp-input-radio-box'>
          <input
            type='radio'
            name='vaccinated'
            onClick={() => setFormData({ ...formData, vaccinated_at: Date })}
            onChange={() => setHadVaccinated(false)}
            checked={checkedValuesVaccine.no}
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
