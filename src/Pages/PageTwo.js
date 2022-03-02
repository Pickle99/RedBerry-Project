import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
const PageTwo = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    axios
      .get('https://bootcamp-2022.devtest.ge/api/skills')
      .then((res) => {
        console.log(res);
        setSkills(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className='select-container'>
        <select defaultValue={'DEFAULT'} name='selector'>
          <option value='DEFAULT' disabled>
            Skills
          </option>
          {skills.map((skill) => (
            <option value={skill.title} key={skill.id}>
              {skill.title}
            </option>
          ))}
        </select>
      </div>

      <div className='qp-input'>
        <input type='text' placeholder='Experience Duration in years' />
      </div>
    </>
  );
};

export default PageTwo;
