import React, { useState } from 'react';
import LandingPage from './LandingPage';
import { Routes, Route } from 'react-router-dom';
import QuestionsPage from './QuestionsPage';
import './App.css';
import { Context } from './context/Context';
import PageOne from './Pages/PageOne';
import PageTwo from './Pages/PageTwo';
import PageThree from './Pages/PageThree';
import PageFour from './Pages/PageFour';
import PageFiveEnd from './Pages/PageFiveEnd';
function App() {
  const [page, setPage] = useState(0);
  const pageTitles = [
    <PageOne />,
    <PageTwo />,
    <PageThree />,
    <PageFour />,
    <PageFiveEnd />,
  ];
  return (
    <Context.Provider
      value={{
        page,
        setPage,
        pageTitles,
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
