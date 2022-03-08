import React, { useState, useContext, useEffect } from 'react';
import { Context } from './context/Context';
import PageOne from './Pages/PageOne';
import PageTwo from './Pages/PageTwo';
import PageThree from './Pages/PageThree';
import PageFour from './Pages/PageFour';
import PageFiveEnd from './Pages/PageFiveEnd';
import ThankPage from './Pages/ThankPage';
const getLocalStoragePageOne = () => {
  let formData = localStorage.getItem('formData');
  if (formData) {
    return JSON.parse(localStorage.getItem('formData'));
  } else {
    return {
      first_name: '',
      last_name: '',
      email: '',
      phone: String,
      skills: [],
      work_preference: '',
      had_covid: '',
      had_covid_at: Date,
      vaccinated: '',
      vaccinated_at: Date,
      will_organize_devtalk: '',
      devtalk_topic: '',
      something_special: '',
    };
  }
};

const getLocalStoragePageOne_2 = () => {
  let phoneValue = localStorage.getItem('phoneValue');

  if (phoneValue) {
    return JSON.parse(localStorage.getItem('phoneValue'));
  } else return String;
};

const getLocalStoragePageTwo = () => {
  let list = localStorage.getItem('list');

  if (list) {
    return JSON.parse(localStorage.getItem('list'));
  } else {
    return [];
  }
};

const getLocalStoragePageThree_1 = () => {
  let hadCovid = localStorage.getItem('hadCovid');

  if (hadCovid) {
    return JSON.parse(localStorage.getItem('hadCovid'));
  } else {
    return '';
  }
};

const getLocalStoragePageThree_2 = () => {
  let hadVaccinated = localStorage.getItem('hadVaccinated');

  if (hadVaccinated) {
    return JSON.parse(localStorage.getItem('hadVaccinated'));
  } else {
    return '';
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

const getLocalStoragePageFour = () => {
  let devtalk = localStorage.getItem('devtalk');

  if (devtalk) {
    return JSON.parse(localStorage.getItem('devtalk'));
  } else {
    return '';
  }
};

const QuestionsPage = () => {
  let [formData, setFormData] = useState(getLocalStoragePageOne());
  const [selectedExperience, setSelectedExperience] = useState('');
  const [workPreference, setWorkPreference] = useState(
    getLocalStoragePageThree_3()
  );
  const [hadCovid, setHadCovid] = useState(getLocalStoragePageThree_1());
  const [hadVaccinated, setHadVaccinated] = useState(
    getLocalStoragePageThree_2()
  );
  const [devtalk, setDevtalk] = useState(getLocalStoragePageFour());
  const [list, setList] = useState(getLocalStoragePageTwo());
  const [hadCovidValue, setHadCovidValue] = useState(
    getLocalStoragePageThree_4()
  );
  const [hadVaccineValue, setHadVaccineValue] = useState(
    getLocalStoragePageThree_5()
  );

  const [phoneValue, setPhoneValue] = useState(getLocalStoragePageOne_2());

  const { page, setPage } = useContext(Context);

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  const [opacityValue_1, setOpacityValue_1] = useState(0.1);
  const [opacityValue_2, setOpacityValue_2] = useState(0.1);
  const [opacityValue_3, setOpacityValue_3] = useState(0.1);
  const [opacityValue_4, setOpacityValue_4] = useState(0.1);

  useEffect(() => {
    if (page === 0) {
      setOpacityValue_1(1);
      setOpacityValue_2(0.1);
      setOpacityValue_3(0.1);
      setOpacityValue_4(0.1);
    } else if (page === 1) {
      setOpacityValue_1(1);
      setOpacityValue_2(1);
      setOpacityValue_3(0.1);
      setOpacityValue_4(0.1);
    } else if (page === 2) {
      setOpacityValue_1(1);
      setOpacityValue_2(1);
      setOpacityValue_3(1);
      setOpacityValue_4(0.1);
    } else {
      setOpacityValue_1(1);
      setOpacityValue_2(1);
      setOpacityValue_3(1);
      setOpacityValue_4(1);
    }
  }, [page]);

  function InputDisplay() {
    if (page === 0) {
      return (
        <PageOne
          formData={formData}
          setFormData={setFormData}
          phoneValue={phoneValue}
          setPhoneValue={setPhoneValue}
          opacityValue_1={opacityValue_1}
          opacityValue_2={opacityValue_2}
          opacityValue_3={opacityValue_3}
          opacityValue_4={opacityValue_4}
          page={page}
          setPage={setPage}
        />
      );
    } else if (page === 1) {
      return (
        <PageTwo
          formData={formData}
          setFormData={setFormData}
          selectedExperience={selectedExperience}
          setSelectedExperience={setSelectedExperience}
          list={list}
          setList={setList}
          opacityValue_1={opacityValue_1}
          opacityValue_2={opacityValue_2}
          opacityValue_3={opacityValue_3}
          opacityValue_4={opacityValue_4}
          page={page}
          setPage={setPage}
        />
      );
    } else if (page === 2) {
      return (
        <PageThree
          formData={formData}
          setFormData={setFormData}
          workPreference={workPreference}
          setWorkPreference={setWorkPreference}
          hadCovid={hadCovid}
          setHadCovid={setHadCovid}
          hadVaccinated={hadVaccinated}
          setHadVaccinated={setHadVaccinated}
          hadCovidValue={hadCovidValue}
          setHadCovidValue={setHadCovidValue}
          setHadVaccineValue={setHadVaccineValue}
          hadVaccineValue={hadVaccineValue}
          opacityValue_1={opacityValue_1}
          opacityValue_2={opacityValue_2}
          opacityValue_3={opacityValue_3}
          opacityValue_4={opacityValue_4}
          page={page}
          setPage={setPage}
        />
      );
    } else if (page === 3) {
      return (
        <PageFour
          formData={formData}
          setFormData={setFormData}
          devtalk={devtalk}
          setDevtalk={setDevtalk}
          opacityValue_1={opacityValue_1}
          opacityValue_2={opacityValue_2}
          opacityValue_3={opacityValue_3}
          opacityValue_4={opacityValue_4}
          page={page}
          setPage={setPage}
        />
      );
    } else if (page === 4) {
      return (
        <PageFiveEnd
          formData={formData}
          setFormData={setFormData}
          setWorkPreference={setWorkPreference}
          setHadCovid={setHadCovid}
          setHadVaccinated={setHadVaccinated}
          setDevtalk={setDevtalk}
          setList={setList}
          setPage={setPage}
          setHadCovidValue={setHadCovidValue}
          setHadVaccineValue={setHadVaccineValue}
          setPhoneValue={setPhoneValue}
          page={page}
        />
      );
    } else if (page === 5) {
      return <ThankPage setPage={setPage} />;
    }
  }

  return InputDisplay();
};

export default QuestionsPage;
