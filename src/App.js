import React, { useState, useEffect } from 'react';
import './App.css';
import LandingPage from './LandingPage';
import QuestionsPage from './QuestionsPage';
import ApplicationsPage from './ApplicationsPage';
import { Routes, Route } from 'react-router-dom';
import { Context } from './context/Context';
import { getLocalStorageForPage } from './Storage';

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
