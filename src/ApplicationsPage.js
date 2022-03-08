import React, { useState, useEffect } from 'react';
import './AppsPage.css';

import axios from 'axios';
import User from './User';

const ApplicationsPage = () => {
  const [appList, setAppList] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://bootcamp-2022.devtest.ge/api/applications?token=cdae124a-83b5-487b-9127-28bec7152e18'
      )
      .then((res) => {
        console.log(res);
        setAppList(res.data);
        console.log(appList, 'ap');
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
      {appList.map((app) => {
        return (
          <User
            key={Math.random()}
            name={app.first_name}
            lastname={app.last_name}
            email={app.email}
            phone={app.phone}
            workpref={app.work_preference}
            hadcovid={app.had_covid}
            hadcovidat={app.had_covid_at}
            vaccinated={app.vaccinated}
            vaccinatedat={app.vaccinated_at}
          />
        );
      })}
    </div>
  );
};

export default ApplicationsPage;
