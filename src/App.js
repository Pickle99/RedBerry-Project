import React, { useState, useEffect } from 'react';
import LandingPage from './LandingPage';
import { Routes, Route } from 'react-router-dom';
import QuestionsPage from './QuestionsPage';
import './App.css';
import { Context } from './context/Context';
import {
  pageTitlesLeftHeader,
  pageTitlesRightInfo,
  pageTitlesRightHeader,
} from './context/ContextExports';

const getLocalStorageForPage = () => {
  let page = localStorage.getItem('page');

  if (page) {
    return JSON.parse(localStorage.getItem('page'));
  } else {
    return 0;
  }
};

function App() {
  const [page, setPage] = useState(getLocalStorageForPage());

  useEffect(() => {
    localStorage.setItem('page', JSON.stringify(page));
  }, [page]);

  return (
    <Context.Provider
      value={{
        pageTitlesLeftHeader,
        pageTitlesRightInfo,
        pageTitlesRightHeader,
        page,
        setPage,
      }}
    >
      <div>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='survey' element={<QuestionsPage />} />
        </Routes>
      </div>
    </Context.Provider>
  );
}

export default App;
