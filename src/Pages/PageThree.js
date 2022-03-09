import React, { useState, useEffect } from 'react';
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io';

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
  opacityValue_1,
  opacityValue_2,
  opacityValue_3,
  opacityValue_4,
  isSubmitCovid,
  setIsSubmitCovid,
  isSubmitVaccine,
  setIsSubmitVaccine,
  setPage,
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

  const [isSubmit, setIsSubmit] = useState(false);

  const [formErrors, setFormErrors] = useState([]);

  const validate = (values) => {
    const errors = {};

    if (!values.work_preference) {
      errors.work_preference = 'Please choose at least one answer';
    }

    if (values.had_covid === '') {
      errors.had_covid = 'Please choose at least one answer';
    }
    if (values.vaccinated === '') {
      errors.vaccinated = 'Please choose at least one answer';
    }
    if (!isSubmitCovid) {
      if (values.had_covid_at == Date) {
        errors.had_covid_at = 'This date field is required!';
      } else if (isSubmitCovid) {
        return '';
      }
    }
    if (!isSubmitVaccine) {
      if (values.vaccinated_at == Date) {
        errors.vaccinated_at = 'This date field is required!';
      } else if (isSubmitVaccine) {
        return '';
      }
    }
    return errors;
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0) {
      setIsSubmit(true);
    }
  }, [formErrors]);

  const handleNext = () => {
    setFormErrors(validate(formData));
  };

  useEffect(() => {
    if (isSubmit) {
      return setPage((curr) => curr + 1);
    } else return setIsSubmit(false);
  }, [isSubmit]);

  useEffect(() => {
    localStorage.setItem('isSubmitCovid', JSON.stringify(isSubmitCovid));
  }, [isSubmitCovid]);

  useEffect(() => {
    localStorage.setItem('isSubmitVaccine', JSON.stringify(isSubmitVaccine));
  }, [isSubmitVaccine]);

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
      setFormData({ ...formData, had_covid_at: undefined });
    }
  }, [hadCovidValue]);

  useEffect(() => {
    localStorage.setItem('hadVaccineValue', JSON.stringify(hadVaccineValue));

    if (hadVaccineValue) {
      setFormData({ ...formData, vaccinated_at: hadVaccineValue });
    } else {
      setFormData({ ...formData, vaccinated_at: undefined });
    }
  }, [hadVaccineValue]);

  const handleYesCovid = () => {
    setIsSubmitCovid(false);
  };

  const handleNoCovid = () => {
    setFormData({ ...formData, had_covid_at: undefined });
    setIsSubmitCovid(true);
    setHadCovidValue('');
  };

  const handleYesVaccine = () => {
    setIsSubmitVaccine(false);
  };

  const handleNoVaccine = () => {
    setFormData({ ...formData, vaccinated_at: undefined });
    setIsSubmitVaccine(true);
    setHadVaccineValue('');
  };

  return (
    <>
      <div className='qp-container'>
        <div className='qp-left'>
          <div className='qp-left-box'>
            <div className='qp-left-header-box qp-left-header'>Covid Stuff</div>
            <div className='qp-input-container'>
              <form>
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
                  <p>{formErrors.work_preference}</p>
                </div>

                <p className='qp-input-headers'>
                  {'Did you contact covid 19? :('}
                </p>
                <div className='qp-input-radio'>
                  <div className='qp-input-radio-box'>
                    <input
                      type='radio'
                      name='had_covid'
                      onClick={handleYesCovid}
                      onChange={() => setHadCovid(true)}
                      checked={checkedValuesCovid.yes}
                    />
                    <p className='qp-input-info'>Yes</p>
                  </div>
                  <div className='qp-input-radio-box'>
                    <input
                      type='radio'
                      /*  onClick={() =>
                        setFormData({ ...formData, had_covid_at: Date })
                      } */
                      onClick={handleNoCovid}
                      onChange={() => setHadCovid(false)}
                      name='had_covid'
                      checked={checkedValuesCovid.no}
                    />
                    <p className='qp-input-info'>No</p>
                  </div>
                  <p>{formErrors.had_covid}</p>
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
                  <p>{formErrors.had_covid_at}</p>
                </div>
                <div></div>
                <p className='qp-input-headers'>Have you been vaccinated?</p>
                <div className='qp-input-radio'>
                  <div className='qp-input-radio-box'>
                    <input
                      type='radio'
                      name='vaccinated'
                      onClick={handleYesVaccine}
                      onChange={() => setHadVaccinated(true)}
                      checked={checkedValuesVaccine.yes}
                    />
                    <p className='qp-input-info'>Yes</p>
                  </div>
                  <div className='qp-input-radio-box'>
                    <input
                      type='radio'
                      name='vaccinated'
                      /*  onClick={() =>
                        setFormData({ ...formData, vaccinated_at: Date })
                      } */
                      onClick={handleNoVaccine}
                      onChange={() => setHadVaccinated(false)}
                      checked={checkedValuesVaccine.no}
                    />
                    <p className='qp-input-info'>No</p>
                  </div>
                  <p>{formErrors.vaccinated}</p>
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
                    <p>{formErrors.vaccinated_at}</p>
                  </div>
                </div>
                <div></div>
              </form>
            </div>
          </div>
          <div className='qp-button-box'>
            <button
              onClick={() => setPage((curr) => curr - 1)}
              className='button-prev'
            >
              <IoIosArrowDropleft />
            </button>

            <div className='circle-container'>
              <div
                onClick={() => setPage(0)}
                style={{ opacity: opacityValue_1 }}
                className='circle'
              ></div>
            </div>
            <div className='circle-container'>
              <div
                onClick={() => setPage(1)}
                style={{ opacity: opacityValue_2 }}
                className='circle'
              ></div>
            </div>
            <div className='circle-container'>
              <div
                onClick={() => setPage(2)}
                style={{ opacity: opacityValue_3 }}
                className='circle'
              ></div>
            </div>
            <div className='circle-container'>
              <div
                onClick={() => setPage(3)}
                style={{ opacity: opacityValue_4 }}
                className='circle'
              ></div>
            </div>
            <div className='circle-container'>
              <div
                onClick={() => setPage(4)}
                style={{ opacity: 0.1 }}
                className='circle'
              ></div>
            </div>

            <button onClick={handleNext} className='button-next'>
              <IoIosArrowDropright />
            </button>
          </div>
        </div>

        <div className='qp-right'>
          <div className='qp-right-box'>
            <div className='qp-box-1'>
              <p className='qp-right-header'>Redberry Covid Policies</p>
              <div className='qp-box-2'>
                <p className='qp-right-text'>
                  {
                    'As this infamous pandemic took over the world, we adjusted our working practices so that our employees can be as safe and comfortable as possible. We have a hybrid work environment, so you can either work from home or visit our lovely office on Sairme Street. If it was up to us, we would love you to see us in the office because we think face-to-face communications > Zoom meetings. Both on the fun and productivity scales.'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageThree;
