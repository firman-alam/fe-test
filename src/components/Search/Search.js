import React, { useState } from 'react';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { Link } from 'react-router-dom';
import './Search.css';
// import Book from '../Book/Book';

const Search = ({ data }) => {
  const [search, setSearch] = useState('');
  return (
    <div className='search'>
      <input
        type='text'
        placeholder='Search...'
        onChange={(e) => setSearch(e.target.value)}
      />
      {/* {data
        .filter((val) => {
          if (search === '') {
            return val;
          } else if (val.name.toLowerCase().includes(search.toLowerCase())) {
            return val;
          }
        })
        .map((book) => (
          <>
            <Book book={book} key={book.id} />
          </>
        ))} */}
      <Link to='/bookmark'>
        <button className='bookmark'>
          <BookmarkIcon /> BOOKMARK
        </button>
      </Link>
    </div>
  );
};

export default Search;
