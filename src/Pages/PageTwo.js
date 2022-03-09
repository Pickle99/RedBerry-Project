import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ListA from './ListA';
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io';

const PageTwo = ({
  formData,
  setFormData,
  selectedExperience,
  setSelectedExperience,
  list,
  setList,
  opacityValue_1,
  opacityValue_2,
  opacityValue_3,
  opacityValue_4,
  setPage,
}) => {
  const [skillsList, setSkillsList] = useState([]);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [isSubmitTwo, setIsSubmitTwo] = useState(false);
  const [isSubmitThree, setIsSubmitThree] = useState(true);
  const [selectedSkill, setSelectedSkill] = useState('');

  const validate = (values) => {
    const errors = {};

    if (isSubmitThree) {
      !selectedSkill
        ? (errors.selectedSkill = 'Skill field is required')
        : (errors.selectedSkill = '');

      !selectedExperience
        ? (errors.selectedExperience = 'Experience field is required')
        : (errors.selectedExperience = '');
    }

    return errors;
  };

  useEffect(() => {
    if (ListA) {
      console.log('listA is true');
    } else return console.log('list a is false');
  }, [ListA]);

  useEffect(() => {
    console.log(formErrors);
    if (isSubmit) {
    }
  }, [formErrors]);

  const handleNext = () => {
    !list.length ? setFormErrors(validate()) : setIsSubmitTwo(true);
  };

  useEffect(() => {
    if (isSubmitTwo) {
      return setPage((curr) => curr + 1);
    } else return setIsSubmitTwo(false);
  }, [isSubmitTwo]);

  const CirclePage = () => {
    if (list.length) {
      return false;
    } else if (!list.length) {
      return true;
    }
  };
  console.log(CirclePage());
  useEffect(() => {
    axios
      .get('https://bootcamp-2022.devtest.ge/api/skills')
      .then((res) => {
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
    e.preventDefault();
    setIsSubmit(true);
    setIsSubmitThree(false);
    const [selectedSkillFilter] = skillsList.filter(
      (skill) => skill.id == selectedSkill
    );

    setSelectedSkill('');
    setSelectedExperience('');
    setFormErrors(validate());
    const newItem = {
      id: selectedSkill,
      title: selectedSkillFilter.title,
      experience: selectedExperience,
    };

    setList([...list, newItem]);

    setFormData({
      ...formData,
      skills: [
        ...formData.skills,
        { id: selectedSkill, experience: selectedExperience },
      ],
    });
    e.preventDefault();
    console.log(formData);
  };

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);

  useEffect(() => {
    localStorage.setItem(
      'selectedExperience',
      JSON.stringify(selectedExperience)
    );

    if (selectedExperience === 0) {
      return setSelectedExperience('');
    }
  }, [selectedExperience]);

  return (
    <>
      <div className='qp-container'>
        <div className='qp-left'>
          <div className='qp-left-box'>
            <div className='qp-left-header-box qp-left-header'>
              Tell us about your skills
            </div>
            <div className='qp-input-container'>
              <form>
                <div className='select-container  '>
                  <select
                    onChange={(event) => setSelectedSkill(+event.target.value)}
                    name='select'
                    defaultValue='default'
                  >
                    <option value='default' disabled hidden>
                      Skills
                    </option>
                    {skillsList.map((skill) => (
                      <option
                        hidden={list.find((item) => item.title === skill.title)}
                        value={skill.id}
                        key={skill.id}
                        disabled={list.find(
                          (item) => item.title === skill.title
                        )}
                      >
                        {skill.title}
                      </option>
                    ))}
                  </select>
                </div>
                {formErrors.selectedSkill}
                <div className='qp-input skill-item'>
                  <input
                    onChange={
                      (event) =>
                        setSelectedExperience(Number(event.target.value)) // same as on line 67 with plus, just to showcase
                    }
                    name='experience'
                    value={selectedExperience}
                    type='number'
                    placeholder='Experience Duration in years'
                  />
                </div>
                <p>{formErrors.selectedExperience}</p>
                <div className='APL-button'>
                  <button
                    disabled={!(selectedSkill && selectedExperience)}
                    onClick={addHandleClick}
                  >
                    Add Programming Language
                  </button>
                </div>
                {list.length > 0 && (
                  <div className='skill-container'>
                    <ListA items={list} removeItem={removeItem} />
                  </div>
                )}
              </form>
            </div>
          </div>
          <div className='qp-button-box'>
            <button
              onClick={() => setPage((curr) => curr - 1)}
              className='button-prev'
            >
              <IoIosArrowDropleft />
            </button>

            <div className='circle-container'>
              <button
                onClick={() => setPage(0)}
                style={{ opacity: opacityValue_1 }}
                disabled={CirclePage()}
                className='circle'
              ></button>
            </div>
            <div className='circle-container'>
              <button
                onClick={() => setPage(1)}
                style={{ opacity: opacityValue_2 }}
                disabled={CirclePage()}
                className='circle'
              ></button>
            </div>
            <div className='circle-container'>
              <button
                onClick={() => setPage(2)}
                style={{ opacity: opacityValue_3 }}
                disabled={CirclePage()}
                className='circle'
              ></button>
            </div>
            <div className='circle-container'>
              <button
                onClick={() => setPage(3)}
                style={{ opacity: opacityValue_4 }}
                disabled={CirclePage()}
                className='circle'
              ></button>
            </div>
            <div className='circle-container'>
              <button
                onClick={() => setPage(4)}
                style={{ opacity: 0.1 }}
                className='circle'
                disabled={CirclePage()}
              ></button>
            </div>

            <button onClick={handleNext} className='button-next'>
              <IoIosArrowDropright />
            </button>
          </div>
        </div>

        <div className='qp-right'>
          <div className='qp-right-box'>
            <div className='qp-box-1'>
              <p className='qp-right-header'>A bit about our battles</p>
              <div className='qp-box-2'>
                <p className='qp-right-text'>
                  As we said, Redberry has been on the field for quite some time
                  now, and we have touched and embraced a variety of programming
                  languages, technologies, philosophies, and frameworks. We are
                  battle-tested in PHP Laravel Stack with Vue.js, refined in
                  React, and allies with Serverside technologies like Docker and
                  Kubernetes, and now we have set foot in the web3 industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageTwo;
