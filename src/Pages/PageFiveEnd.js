import React from 'react';
import axios from 'axios';

const PageFiveEnd = ({
  formData,
  setFormData,
  setWorkPreference,
  setHadCovid,
  setHadVaccinated,
  setDevtalk,
  setList,
  setPage,
  setHadCovidValue,
  setHadVaccineValue,
  setPhoneValue,
  page,
}) => {
  const token = 'cdae124a-83b5-487b-9127-28bec7152e18';
  const url = 'https://bootcamp-2022.devtest.ge/api/application';

  const handleBack = (e) => {
    e.preventDefault();
    setPage(3);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
    axios.post(url, {
      token: token,
      first_name: formData.first_name,
      last_name: formData.last_name,
      email: formData.email,
      phone: formData.phone,
      skills: formData.skills,
      work_preference: formData.work_preference,
      had_covid: formData.had_covid,
      had_covid_at: formData.had_covid_at,
      vaccinated: formData.vaccinated,
      vaccinated_at: formData.vaccinated_at,
      will_organize_devtalk: formData.will_organize_devtalk,
      devtalk_topic: formData.devtalk_topic,
      something_special: formData.something_special,
    });
    setFormData({
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      skills: [],
      work_preference: '',
      had_covid: '',
      had_covid_at: Date,
      vaccinated: '',
      vaccinated_at: Date,
      will_organize_devtalk: '',
      devtalk_topic: '',
      something_special: '',
    });
    setWorkPreference('');
    setHadCovid('');
    setHadVaccinated('');
    setDevtalk('');
    setList([]);
    setPage(5);
    setHadCovidValue('');
    setHadVaccineValue('');
    setPhoneValue('');
  };

  return (
    <div>
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={handleBack}>Go back</button>
    </div>
  );
};

export default PageFiveEnd;
