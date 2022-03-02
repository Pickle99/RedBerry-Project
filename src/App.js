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

  const pageTitlesLeftHeader = [
    'Hey, Rocketeer, what are your coordinates?',
    'Tell us about your skills',
    'Covid Stuff',
    'What about you?',
  ];
  const pageTitlesRightHeader = [
    'Redberry Origins',
    'A bit about our battles',
    'Redberry Covid Policies',
    'Redberrian Insights',
  ];
  const pageTitlesRightInfo = [
    'You watch “What? Where? When?” Yeah. Our founders used to play it. That’s where they got a question about a famous American author and screenwriter Ray Bradbury. Albeit, our CEO Gaga Darsalia forgot the exact name and he answered Ray Redberry. And at that moment, a name for a yet to be born company was inspired - Redberry 😇',
    'As we said, Redberry has been on the field for quite some time now, and we have touched and embraced a variety of programming languages, technologies, philosophies, and frameworks. We are battle-tested in PHP Laravel Stack with Vue.js, refined in React, and allies with Serverside technologies like Docker and Kubernetes, and now we have set foot in the web3 industry.',
    'As this infamous pandemic took over the world, we adjusted our working practices so that our employees can be as safe and comfortable as possible. We have a hybrid work environment, so you can either work from home or visit our lovely office on Sairme Street. If it was up to us, we would love you to see us in the office because we think face-to-face communications > Zoom meetings. Both on the fun and productivity scales. ',
    'We were soo much fun before the pandemic started! Parties almost every weekend and lavish employee birthday celebrations! Unfortunately, covid ruined that fun like it did almost everything else in the world. But we try our best to zhuzh it up a bit. For example, we host biweekly Devtalks where our senior and lead developers talk about topics they are passionate about. Previous topics have included Web3, NFT, Laravel 9, Kubernetes, etc. We hold these talks in the office but you can join our Zoom broadcast as well. Feel free to join either as an attendee or a speaker!',
  ];

  const pageInputs = [
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
        pageTitlesLeftHeader,
        pageTitlesRightHeader,
        pageTitlesRightInfo,
        pageInputs,
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
