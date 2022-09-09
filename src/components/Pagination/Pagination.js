import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setPage } from '../../services/bookSlice';
import './Pagination.css';

const Pagination = () => {
  const [num, setNum] = useState(1);
  const dispatch = useDispatch();

  const handlePage = () => {
    dispatch(setPage());
    setNum((prev) => prev + 1);
  };

  return (
    <div className='pagination'>
      <button
        className='page-button'
        onClick={() => setNum((old) => Math.max(old - 1, 1))}
        disabled={num === 0}
      >
        Previous
      </button>
      <span>{num}</span>
      <button className='page-button' onClick={handlePage}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
