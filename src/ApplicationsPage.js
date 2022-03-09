import React, { useState, useEffect } from 'react';
import './AppsPage.css';

import axios from 'axios';
import User from './User';

const ApplicationsPage = () => {
  const [appList, setAppList] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://bootcamp-2022.devtest.ge/api/applications?token=164cc12e-b702-4944-bcf3-e6622eb033fc'
      )
      .then((res) => {
        console.log(res);
        setAppList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className='app-page'>
      <div className='app-page-container'>
        <header className='app-page-header'>
          <p>Submitted Applications</p>
        </header>
      </div>
      {appList.map((app, i) => {
        return (
          <User
            key={Math.random()}
            i={i}
            name={app.first_name}
            lastname={app.last_name}
            email={app.email}
            phone={app.phone}
            workpref={app.work_preference}
            hadcovid={app.had_covid}
            hadcovidat={app.had_covid_at}
            vaccinated={app.vaccinated}
            vaccinatedat={app.vaccinated_at}
            skills={app.skills}
            devtalks={app.will_organize_devtalk}
            devtalktopic={app.devtalk_topic}
            special={app.something_special}
          />
        );
      })}
    </div>
  );
};

export default ApplicationsPage;
