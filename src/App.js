import React, { useState } from 'react';
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
function App() {
  const [page, setPage] = useState(0);
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
