import React, { useContext } from 'react';
import { Context } from './context/Context';

const QuestionsPage = () => {
  const {
    page,
    setPage,
    pageTitlesLeftHeader,
    pageTitlesRightHeader,
    pageTitlesRightInfo,
    pageInputs,
  } = useContext(Context);
  return (
    <div className='qp-container'>
      <div className='qp-left'>
        <div className='qp-left-box'>
          <div className='qp-left-header-box'>
            <p className='qp-left-header'>{pageTitlesLeftHeader[page]}</p>
          </div>
          <div className='qp-input-container'>
            <form>{pageInputs[page]}</form>
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
/* <div className='qp-button-box'>
        <button
          className='button-prev'
          disabled={page == 0}
          onClick={() => setPage((currPage) => currPage - 1)}
        >
          prev
        </button>
        <button
          className='button-next'
          disabled={page == pageTitles.length - 1}
          onClick={() => setPage((currPage) => currPage + 1)}
        >
          next
        </button>
      </div> */
