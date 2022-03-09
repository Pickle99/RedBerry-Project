export const getLocalStoragePageOne = () => {
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

export const getLocalStoragePageOne_2 = () => {
  let phoneValue = localStorage.getItem('phoneValue');

  if (phoneValue) {
    return JSON.parse(localStorage.getItem('phoneValue'));
  } else return String;
};

export const getLocalStoragePageTwo = () => {
  let list = localStorage.getItem('list');

  if (list) {
    return JSON.parse(localStorage.getItem('list'));
  } else {
    return [];
  }
};

export const getLocalStoragePageTwo_2 = () => {
  let selectedExperience = localStorage.getItem('selectedExperience');

  if (selectedExperience) {
    return JSON.parse(localStorage.getItem('selectedExperience'));
  } else {
    return '';
  }
};

export const getLocalStoragePageThree_1 = () => {
  let hadCovid = localStorage.getItem('hadCovid');

  if (hadCovid) {
    return JSON.parse(localStorage.getItem('hadCovid'));
  } else {
    return '';
  }
};

export const getLocalStoragePageThree_2 = () => {
  let hadVaccinated = localStorage.getItem('hadVaccinated');

  if (hadVaccinated) {
    return JSON.parse(localStorage.getItem('hadVaccinated'));
  } else {
    return '';
  }
};

export const getLocalStoragePageThree_3 = () => {
  let workPreference = localStorage.getItem('workPreference');

  if (workPreference) {
    return JSON.parse(localStorage.getItem('workPreference'));
  } else {
    return '';
  }
};

export const getLocalStoragePageThree_4 = () => {
  let hadCovidValue = localStorage.getItem('hadCovidValue');

  if (hadCovidValue) {
    return JSON.parse(localStorage.getItem('hadCovidValue'));
  } else {
    return '';
  }
};

export const getLocalStoragePageThree_5 = () => {
  let hadVaccineValue = localStorage.getItem('hadVaccineValue');

  if (hadVaccineValue) {
    return JSON.parse(localStorage.getItem('hadVaccineValue'));
  } else {
    return '';
  }
};

export const getLocalStoragePageThree_6 = () => {
  let isSubmitCovid = localStorage.getItem('isSubmitCovid');

  if (isSubmitCovid) {
    return JSON.parse(localStorage.getItem('isSubmitCovid'));
  } else {
    return false;
  }
};

export const getLocalStoragePageThree_7 = () => {
  let isSubmitVaccine = localStorage.getItem('isSubmitVaccine');

  if (isSubmitVaccine) {
    return JSON.parse(localStorage.getItem('isSubmitVaccine'));
  } else {
    return false;
  }
};

export const getLocalStoragePageFour = () => {
  let devtalk = localStorage.getItem('devtalk');

  if (devtalk) {
    return JSON.parse(localStorage.getItem('devtalk'));
  } else {
    return '';
  }
};
