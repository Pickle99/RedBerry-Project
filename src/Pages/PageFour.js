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
  page,
  setPage,
}) => {
  const [checkedValuesDevtalk, setCheckedValuesDevtalk] = useState({
    yes: false,
    no: false,
  });

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
                      onChange={() => setDevtalk(true)}
                      checked={checkedValuesDevtalk.yes}
                    />
                    <p className='qp-input-info'>Yes</p>
                  </div>
                  <div className='qp-input-radio-box'>
                    <input
                      type='radio'
                      onChange={() => setDevtalk(false)}
                      name='will_organize_devtalk'
                      checked={checkedValuesDevtalk.no}
                    />
                    <p className='qp-input-info'>No</p>
                  </div>
                </div>
                <p className='qp-input-headers'>
                  What would you speak about at Devtalk?
                </p>
                <div className='qp-input-radio'>
                  <div className='qp-input-textarea'>
                    <textarea
                      cols='70'
                      rows='4'
                      placeholder='I would...'
                      value={formData.devtalk_topic}
                      onChange={(event) =>
                        setFormData({
                          ...formData,
                          devtalk_topic: event.target.value,
                        })
                      }
                    ></textarea>
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
                  </div>
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

            <button
              onClick={() => setPage((curr) => curr + 1)}
              className='button-next'
            >
              <IoIosArrowDropright />
            </button>
          </div>
        </div>

        <div className='qp-right'>
          <div className='qp-right-box'>
            <div className='qp-box-1'>
              <p className='qp-right-header'>Redberry Covid Policies</p>
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
