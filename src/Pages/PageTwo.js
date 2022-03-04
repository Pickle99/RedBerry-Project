import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ListA from './ListA';

const PageTwo = ({ formData, setFormData }) => {
  const [skillsList, setSkillsList] = useState([]);
  const [list, setList] = useState([]);
  const [selectedSkill, setSelectedSkill] = useState('');
  const [selectedExperience, setSelectedExperience] = useState('');

  useEffect(() => {
    axios
      .get('https://bootcamp-2022.devtest.ge/api/skills')
      .then((res) => {
        console.log(res);
        setSkillsList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const removeItem = (id) => {
    setList(list.filter((item) => item.id !== id));
    setFormData({
      ...formData,
      skills: formData.skills.filter((item) => item.id !== id),
    });
  };

  const addHandleClick = (e) => {
    console.log(selectedSkill, '123123');
    console.log(list);
    const [selectedSkillFilter] = skillsList.filter(
      (skill) => skill.id == selectedSkill
    );
    console.log(skillsList, 'skillslist');
    console.log(selectedSkillFilter, '00select');

    const newItem = {
      id: selectedSkill,
      title: selectedSkillFilter.title,
      experience: selectedExperience,
    };

    setList([...list, newItem]);

    setFormData({
      ...formData,
      // skills: [...formData.skills, 1],
      skills: [
        ...formData.skills,
        { id: selectedSkill, experience: selectedExperience },
        // (formData.skills[formData.skills.length - 1] = {
        //   id: 1,
        //   experience: selectedExperience,
        // }),
      ],
    });
    e.preventDefault();
    console.log(formData);
    /* if (!(selectValue && formData.experience)) {
      console.log('enter values');
    }*/
  };

  return (
    <>
      <div className='select-container  '>
        <select
          onChange={(event) => setSelectedSkill(+event.target.value)}
          name='select'
          defaultValue={'DEFAULT'}
        >
          <option value='DEFAULT' disabled hidden>
            Skills
          </option>
          {skillsList.map((skill) => (
            <option
              hidden={list.find((item) => item.title === skill.title)}
              value={skill.id}
              key={skill.id}
              disabled={list.find((item) => item.title === skill.title)}
            >
              {skill.title}
            </option>
          ))}
        </select>
      </div>

      <div className='qp-input skill-item'>
        <input
          value={formData.experience}
          onChange={
            (event) => setSelectedExperience(Number(event.target.value)) // same as on line 67 with plus, just to showcase
            /*setFormData({
              
              ...formData, 
              // skills: [...formData.skills, 1],
              skills: [
                ...formData.skills,
                (formData.skills[formData.skills.length - 1] = {
                  id: formData.skills[formData.skills.length - 1].id,
                  experience: event.target.value,
                }),
              ],
            }) */
          }
          type='text'
          placeholder='Experience Duration in years'
        />
      </div>

      <div className='APL-button'>
        <button onClick={addHandleClick}>Add Programming Language</button>
      </div>
      {list.length > 0 && (
        <div className='skill-container'>
          <ListA items={list} removeItem={removeItem} />
        </div>
      )}
    </>
  );
};

export default PageTwo;
