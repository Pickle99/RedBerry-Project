import React, { useState, useEffect } from 'react';
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io';

const PageThree = ({
  formData,
  setFormData,
  devtalk,
  setDevtalk,
  opacityValue_1,
  opacityValue_2,
  opacityValue_3,
  opacityValue_4,
  devtalkValue,
  setDevtalkValue,
  isSubmitTopic,
  setIsSubmitTopic,
  setPage,
}) => {
  const [checkedValuesDevtalk, setCheckedValuesDevtalk] = useState({
    yes: false,
    no: false,
  });

  const handleYesTopic = () => {
    setIsSubmitTopic(false);
  };

  const handleNoTopic = () => {
    setFormData({ ...formData, devtalk_topic: String });
    setIsSubmitTopic(true);
  };
  //
  const [isSubmit, setIsSubmit] = useState(false);

  const [formErrors, setFormErrors] = useState([]);

  const validate = (values) => {
    const errors = {};

    if (values.will_organize_devtalk === '') {
      errors.will_organize_devtalk = 'Please choose at least one answer';
    }

    if (!isSubmitTopic) {
      if (values.devtalk_topic == String) {
        errors.devtalk_topic = 'This field is required!';
      } else if (isSubmitTopic) {
        return '';
      }
    }
    if (values.something_special === '') {
      errors.something_special = 'Text something!';
    }

    return errors;
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0) {
      setIsSubmit(true);
    }
  }, [formErrors]);

  const handleNext = () => {
    setFormErrors(validate(formData));
  };

  useEffect(() => {
    if (isSubmit) {
      return setPage((curr) => curr + 1);
    } else return setIsSubmit(false);
  }, [isSubmit]);

  useEffect(() => {
    localStorage.setItem('isSubmitTopic', JSON.stringify(isSubmitTopic));
  }, [isSubmitTopic]);
  /// up

  useEffect(() => {
    localStorage.setItem('devtalkValue', JSON.stringify(devtalkValue));
    if (devtalkValue) {
      return setFormData({ ...formData, devtalk_topic: devtalkValue });
    } else return setFormData({ ...formData, devtalk_topic: String });
  }, [devtalkValue]);

  useEffect(() => {
    localStorage.setItem('devtalk', JSON.stringify(devtalk));
    setFormData({ ...formData, will_organize_devtalk: devtalk });

    if (devtalk === true) {
      setCheckedValuesDevtalk({
        ...checkedValuesDevtalk,
        yes: true,
        no: false,
      });
    } else if (devtalk === false) {
      setCheckedValuesDevtalk({
        ...checkedValuesDevtalk,
        yes: false,
        no: true,
      });
    } else {
      setCheckedValuesDevtalk({
        ...checkedValuesDevtalk,
        yes: false,
        no: false,
      });
    }
  }, [devtalk]);

  return (
    <>
      <div className='qp-container'>
        <div className='qp-left'>
          <div className='qp-left-box'>
            <div className='qp-left-header-box qp-left-header'>
              What about you?
            </div>
            <div className='qp-input-container'>
              <form>
                <p className='qp-input-headers'>
                  Would you attend Devtalks and maybe also organize your own
                </p>
                <div className='qp-input-radio'>
                  <div className='qp-input-radio-box'>
                    <input
                      type='radio'
                      name='will_organize_devtalk'
                      onClick={handleYesTopic}
                      onChange={() => setDevtalk(true)}
                      checked={checkedValuesDevtalk.yes}
                    />
                    <p className='qp-input-info'>Yes</p>
                  </div>
                  <div className='qp-input-radio-box'>
                    <input
                      type='radio'
                      onClick={handleNoTopic}
                      onChange={() => setDevtalk(false)}
                      name='will_organize_devtalk'
                      checked={checkedValuesDevtalk.no}
                    />
                    <p className='qp-input-info'>No</p>
                  </div>
                  <p>{formErrors.will_organize_devtalk}</p>
                </div>

                <div className={devtalk ? 'empty' : 'hide'}>
                  <p className='qp-input-headers'>
                    What would you speak about at Devtalk?
                  </p>
                  <div className='qp-input-radio'>
                    <div className='qp-input-textarea'>
                      <textarea
                        cols='70'
                        rows='4'
                        placeholder='I would...'
                        value={devtalkValue}
                        onChange={(event) =>
                          setDevtalkValue(event.target.value)
                        }
                      ></textarea>
                    </div>
                    <p>{formErrors.devtalk_topic}</p>
                  </div>
                </div>

                <p className='qp-input-headers'>Tell us something special</p>
                <div className='qp-input-radio'>
                  <div className='qp-input-textarea'>
                    <textarea
                      cols='70'
                      rows='1'
                      placeholder='I...'
                      value={formData.something_special}
                      onChange={(event) =>
                        setFormData({
                          ...formData,
                          something_special: event.target.value,
                        })
                      }
                    ></textarea>
                  </div>
                  <p>{formErrors.something_special}</p>
                </div>
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
              <div
                onClick={() => setPage(0)}
                style={{ opacity: opacityValue_1 }}
                className='circle'
              ></div>
            </div>
            <div className='circle-container'>
              <div
                onClick={() => setPage(1)}
                style={{ opacity: opacityValue_2 }}
                className='circle'
              ></div>
            </div>
            <div className='circle-container'>
              <div
                onClick={() => setPage(2)}
                style={{ opacity: opacityValue_3 }}
                className='circle'
              ></div>
            </div>
            <div className='circle-container'>
              <div
                onClick={() => setPage(3)}
                style={{ opacity: opacityValue_4 }}
                className='circle'
              ></div>
            </div>
            <div className='circle-container'>
              <div
                onClick={() => setPage(4)}
                style={{ opacity: 0.1 }}
                className='circle'
              ></div>
            </div>

            <button onClick={handleNext} className='button-next'>
              <IoIosArrowDropright />
            </button>
          </div>
        </div>

        <div className='qp-right'>
          <div className='qp-right-box'>
            <div className='qp-box-1'>
              <p className='qp-right-header'>Redberrian Insights</p>
              <div className='qp-box-2'>
                <p className='qp-right-text'>
                  We were soo much fun before the pandemic started! Parties
                  almost every weekend and lavish employee birthday
                  celebrations! Unfortunately, covid ruined that fun like it did
                  almost everything else in the world. But we try our best to
                  zhuzh it up a bit. For example, we host biweekly Devtalks
                  where our senior and lead developers talk about topics they
                  are passionate about. Previous topics have included Web3, NFT,
                  Laravel 9, Kubernetes, etc. We hold these talks in the office
                  but you can join our Zoom broadcast as well. Feel free to join
                  either as an attendee or a speaker!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageThree;
