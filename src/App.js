import React, { useState, useEffect } from 'react';
import './App.css';
import LandingPage from './LandingPage';
import QuestionsPage from './QuestionsPage';
import ApplicationsPage from './ApplicationsPage';
import { Routes, Route } from 'react-router-dom';
import { Context } from './context/Context';

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
        page,
        setPage,
      }}
    >
      <div>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='survey' element={<QuestionsPage />} />
          <Route path='submitted-applications' element={<ApplicationsPage />} />
        </Routes>
      </div>
    </Context.Provider>
  );
}

export default App;
