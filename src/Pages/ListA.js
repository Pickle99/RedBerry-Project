import React from 'react';
import { FaTrash } from 'react-icons/fa';
const ListA = ({ items, removeItem }) => {
  return (
    <div className='skill-list'>
      {items.map((item) => {
        const { id, title } = item;
        return (
          <article className='skill-item' key={id}>
            <p className='title'>{title}</p>
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
