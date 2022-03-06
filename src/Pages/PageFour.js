import React, { useState, useEffect } from 'react';

const getLocalStoragePageFour = () => {
  let devtalk = localStorage.getItem('devtalk');

  if (devtalk) {
    return JSON.parse(localStorage.getItem('devtalk'));
  } else {
    return false;
  }
};

const PageThree = ({ formData, setFormData }) => {
  const [devtalk, setDevtalk] = useState(getLocalStoragePageFour());

  const [checkedYe3, setCheckedYe3] = useState(false);
  const [checkedNo3, setCheckedNo3] = useState(false);

  useEffect(() => {
    if (devtalk === true) {
      setCheckedNo3(false);
      setCheckedYe3(true);
    } else if (devtalk === false) {
      setCheckedYe3(false);
      setCheckedNo3(true);
    } else {
      setCheckedYe3(false);
      setCheckedNo3(false);
    }
  }, [devtalk]);

  useEffect(() => {
    localStorage.setItem('devtalk', JSON.stringify(devtalk));
    setFormData({ ...formData, will_organize_devtalk: devtalk });
  }, [devtalk]);

  return (
    <>
      <p className='qp-input-headers'>
        Would you attend Devtalks and maybe also organize your own
      </p>
      <div className='qp-input-radio'>
        <div className='qp-input-radio-box'>
          <input
            type='radio'
            name='will_organize_devtalk'
            checked={checkedYe3}
            onChange={() => setDevtalk(true)}
          />
          <p className='qp-input-info'>Yes</p>
        </div>
        <div className='qp-input-radio-box'>
          <input
            type='radio'
            onChange={() => setDevtalk(false)}
            name='will_organize_devtalk'
            checked={checkedNo3}
          />
          <p className='qp-input-info'>No</p>
        </div>
      </div>
      <p className='qp-input-headers'>What would you speak about at Devtalk?</p>
      <div className='qp-input-radio'>
        <div className='qp-input-textarea'>
          <textarea
            cols='70'
            rows='4'
            placeHolder='I would...'
            value={formData.devtalk_topic}
            onChange={(event) =>
              setFormData({ ...formData, devtalk_topic: event.target.value })
            }
          ></textarea>
        </div>
        <p className='qp-input-headers'>Tell us something special</p>
        <div className='qp-input-radio'>
          <div className='qp-input-textarea'>
            <textarea
              cols='70'
              rows='1'
              placeHolder='I...'
              value={formData.something_special}
              onChange={(event) =>
                setFormData({
                  ...formData,
                  something_special: event.target.value,
                })
              }
            ></textarea>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageThree;
