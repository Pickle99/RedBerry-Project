import React, { useState, useContext, useEffect } from 'react';
import { Context } from './context/Context';
import PageOne from './Pages/PageOne';
import PageTwo from './Pages/PageTwo';
import PageThree from './Pages/PageThree';
import PageFour from './Pages/PageFour';
import PageFiveEnd from './Pages/PageFiveEnd';

const getLocalStoragePageOne = () => {
  let formData = localStorage.getItem('formData');
  if (formData) {
    return JSON.parse(localStorage.getItem('formData'));
  } else {
    return {
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
    };
  }
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

  const {
    page,
    setPage,
    pageTitlesLeftHeader,
    pageTitlesRightHeader,
    pageTitlesRightInfo,
  } = useContext(Context);

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  function InputDisplay() {
    if (page === 0) {
      return <PageOne formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return (
        <PageTwo
          formData={formData}
          setFormData={setFormData}
          selectedExperience={selectedExperience}
          setSelectedExperience={setSelectedExperience}
          list={list}
          setList={setList}
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
        />
      );
    } else if (page === 3) {
      return (
        <PageFour
          formData={formData}
          setFormData={setFormData}
          devtalk={devtalk}
          setDevtalk={setDevtalk}
        />
      );
    } else {
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
        />
      );
    }
  }

  return (
    <div className='qp-container'>
      <div className='qp-left'>
        <div className='qp-left-box'>
          <div className='qp-left-header-box qp-left-header'>
            {pageTitlesLeftHeader[page]}
          </div>
          <div className='qp-input-container'>
            <form>{InputDisplay()}</form>
          </div>
        </div>
        <div className='qp-button-box'>
          <button
            className='button-prev'
            disabled={page == 0}
            onClick={() => setPage((currPage) => currPage - 1)}
          >
            prev
          </button>
          <button
            className='button-next'
            disabled={page == pageTitlesLeftHeader.length}
            onClick={() => setPage((currPage) => currPage + 1)}
          >
            next
          </button>
        </div>
      </div>

      <div className='qp-right'>
        <div className='qp-right-box'>
          <div className='qp-box-1'>
            <p className='qp-right-header'>{pageTitlesRightHeader[page]}</p>
            <div className='qp-box-2'>
              <p className='qp-right-text'>{pageTitlesRightInfo[page]}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionsPage;
