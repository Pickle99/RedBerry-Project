import React from 'react';
import LandingPage from './LandingPage';
import { Routes, Route } from 'react-router-dom';
import QuestionsPage from './QuestionsPage';
import './App.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='survey' element={<QuestionsPage />} />
      </Routes>
    </div>
  );
}

export default App;
