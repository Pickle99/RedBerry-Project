import React, { useState, useContext, useEffect } from 'react';
import { Context } from './context/Context';
import PageOne from './Pages/PageOne';
import PageTwo from './Pages/PageTwo';
import PageThree from './Pages/PageThree';
import PageFour from './Pages/PageFour';
import PageFive from './Pages/PageFive';
import ThankPage from './Pages/ThankPage';

const QuestionsPage = () => {
  let [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: undefined,
    skills: [],
    work_preference: '',
    had_covid: '',
    had_covid_at: undefined,
    vaccinated: '',
    vaccinated_at: undefined,
    will_organize_devtalk: '',
    devtalk_topic: undefined,
    something_special: '',
  });
  const [selectedExperience, setSelectedExperience] = useState('');
  const [workPreference, setWorkPreference] = useState('');
  const [hadCovid, setHadCovid] = useState('');
  const [hadVaccinated, setHadVaccinated] = useState('');

  const [devtalk, setDevtalk] = useState('');
  const [list, setList] = useState([]);
  const [hadCovidValue, setHadCovidValue] = useState('');
  const [hadVaccineValue, setHadVaccineValue] = useState('');

  const [isSubmitCovid, setIsSubmitCovid] = useState(false);
  const [isSubmitVaccine, setIsSubmitVaccine] = useState(false);
  const [isSubmitTopic, setIsSubmitTopic] = useState('');

  const [phoneValue, setPhoneValue] = useState('');
  const [devtalkValue, setDevtalkValue] = useState('');

  const { page, setPage } = useContext(Context);
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
          isSubmitCovid={isSubmitCovid}
          setIsSubmitCovid={setIsSubmitCovid}
          isSubmitVaccine={isSubmitVaccine}
          setIsSubmitVaccine={setIsSubmitVaccine}
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
          devtalkValue={devtalkValue}
          setDevtalkValue={setDevtalkValue}
          isSubmitTopic={isSubmitTopic}
          setIsSubmitTopic={setIsSubmitTopic}
          page={page}
          setPage={setPage}
        />
      );
    } else if (page === 4) {
      return (
        <PageFive
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
          setSelectedExperience={setSelectedExperience}
          setDevtalkValue={setDevtalkValue}
        />
      );
    } else if (page === 5) {
      return <ThankPage setPage={setPage} />;
    }
  }

  return InputDisplay();
};

export default QuestionsPage;
