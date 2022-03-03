import React from 'react';
import { FaTrash } from 'react-icons/fa';
const ListA = ({ items, removeItem }) => {
  return (
    <div className='skill-list'>
      {items.map((item) => {
        const { id, title, experience } = item;
        return (
          <article className='skill-item' key={id}>
            <p className='title'>{title}</p>
            <p className='experience'>Years of Experience: {experience}</p>
            <div className='btn-container'>
              <button
                onClick={() => removeItem(id)}
                className='delete-btn'
                type='button'
              >
                <FaTrash />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default ListA;
