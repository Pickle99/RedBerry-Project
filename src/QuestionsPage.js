import React, { useState, useContext } from 'react';
import { Context } from './context/Context';
import PageOne from './Pages/PageOne';
import PageTwo from './Pages/PageTwo';
import PageThree from './Pages/PageThree';
import PageFour from './Pages/PageFour';
import PageFiveEnd from './Pages/PageFiveEnd';

const QuestionsPage = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    skills: [
      {
        id: '',
        experience: '',
      },
    ],
    work_preference: '',
    had_covid: '',
    had_covid_at: '',
    vaccinated: '',
    vaccinated_at: '',
    will_organize_devtalk: '',
    devtalk_topic: '',
    something_special: '',
  });
  const {
    page,
    setPage,
    pageTitlesLeftHeader,
    pageTitlesRightHeader,
    pageTitlesRightInfo,
  } = useContext(Context);

  function InputDisplay() {
    if (page === 0) {
      return <PageOne formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <PageTwo formData={formData} setFormData={setFormData} />;
    } else if (page === 2) {
      return <PageThree formData={formData} setFormData={setFormData} />;
    } else if (page === 3) {
      return <PageFour formData={formData} setFormData={setFormData} />;
    } else {
      return <PageFiveEnd formData={formData} setFormData={setFormData} />;
    }
  }

  return (
    <div className='qp-container'>
      <div className='qp-left'>
        <div className='qp-left-box'>
          <div className='qp-left-header-box'></div>
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
            disabled={page == pageTitlesLeftHeader.length - 1}
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
