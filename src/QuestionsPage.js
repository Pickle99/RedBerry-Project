import React, { useState, useContext } from 'react';

import { Context } from './context/Context';
const QuestionsPage = () => {
  const { page, setPage, pageTitles } = useContext(Context);
  return (
    <div>
      {pageTitles[page]}
      <div className='qp-button-box'>
        <button
          disabled={page == 0}
          onClick={() => setPage((currPage) => currPage - 1)}
        >
          prev
        </button>
        <button
          disabled={page == pageTitles.length - 1}
          onClick={() => setPage((currPage) => currPage + 1)}
        >
          next
        </button>
      </div>
    </div>
  );
};

export default QuestionsPage;
