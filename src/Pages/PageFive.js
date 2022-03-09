import React from 'react';
import axios from 'axios';

const PageFive = ({
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
  setSelectedExperience,
  setDevtalkValue,
}) => {
  const token = 'a7d40f28-b76d-4016-8c6d-cbf499c53a93';
  const url = 'https://bootcamp-2022.devtest.ge/api/application';

  const handleBack = (e) => {
    e.preventDefault();
    setPage(3);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post(url, {
      token: token,
      first_name: formData.first_name,
      last_name: formData.last_name,
      email: formData.email,
      phone: formData.phone || undefined,
      skills: formData.skills,
      work_preference: formData.work_preference,
      had_covid: formData.had_covid,
      had_covid_at: formData.had_covid_at || undefined,
      vaccinated: formData.vaccinated,
      vaccinated_at: formData.vaccinated_at || undefined,
      will_organize_devtalk: formData.will_organize_devtalk,
      devtalk_topic: formData.devtalk_topic,
      something_special: formData.something_special,
    });
    setFormData({
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
    setWorkPreference('');
    setHadCovid('');
    setHadVaccinated('');
    setDevtalk('');
    setList([]);
    setHadCovidValue('');
    setHadVaccineValue('');
    setPhoneValue('');
    setSelectedExperience('');
    setDevtalkValue('');
    setPage(5);
  };

  return (
    <div className='final-page-buttons'>
      <div className='fpb-box'>
        <div className='fpb-box-submit'>
          <button onClick={handleSubmit}>Submit</button>
        </div>

        <div className='fpb-box-back'>
          <button onClick={handleBack}>Go back</button>
        </div>
      </div>
    </div>
  );
};

export default PageFive;
