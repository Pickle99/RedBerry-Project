import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import ListA from './ListA';

const PageTwo = () => {
  const [skills, setSkills] = useState([]);
  const [list, setList] = useState([]);
  const [selectValue, setSelectValue] = useState('');

  const {
    register,
    watch,
    reset,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });
  const experience = watch('experience');
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

  const removeItem = (id) => {
    setList(list.filter((item) => item.id !== id));
  };

  const addHandleClick = (e) => {
    console.log(list);
    e.preventDefault();

    if (!(selectValue && experience)) {
      console.log('enter values');
    } else if (1 === 0) {
      console.log('already exsisted!');
    } else {
      const newItem = {
        id: new Date().getTime().toString(),
        title: selectValue,
        experience: experience,
      };
      setList([...list, newItem]);
      reset({
        experience: '',
      });
      setSelectValue('');
    }
  };

  const selectOnChange = (e) => {
    setSelectValue(e.target.value);
  };

  return (
    <>
      <div className='select-container  '>
        <select
          onChange={selectOnChange}
          name='select'
          defaultValue={'DEFAULT'}
        >
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

      <div className='qp-input skill-item'>
        <input
          {...register('experience', {
            required: 'Entering your experience is required',
          })}
          type='text'
          placeholder='Experience Duration in years'
        />
      </div>
      {errors?.experience && <p>{errors?.experience?.message || 'Error!'}</p>}
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
