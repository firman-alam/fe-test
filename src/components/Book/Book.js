import React, { useState } from 'react';
import './Book.css';
import DescriptionIcon from '@mui/icons-material/Description';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import TurnedInNotOutlinedIcon from '@mui/icons-material/TurnedInNotOutlined';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import { useDispatch } from 'react-redux';
import { getBookmark } from '../../services/bookmarkSlice';

const Book = ({ book }) => {
  const [isActive, setIsActive] = useState(false);
  const dispatch = useDispatch();

  const handleBookmark = () => {
    dispatch(getBookmark(book));
  };

  return (
    <div className='card'>
      <div className='card__left'>
        <img src={book.cover_url} alt={book.title} />
        <div className='card__left-buttons'>
          <button className='book-button'>
            <HeadphonesIcon /> Dengar
          </button>
          <button className='book-button'>
            <MenuBookIcon /> Baca
          </button>
        </div>
      </div>
      <div className='card__right'>
        <div className='card__right-bookmark' onClick={handleBookmark}>
          <TurnedInNotOutlinedIcon />
        </div>
        <h3>{book.title}</h3>
        <p>{book.authors}</p>
        <hr />
        <span className='duration'>
          <p className='card__icons'>
            <DescriptionIcon /> {book.sections.length} bab
          </p>{' '}
          <p className='card__icons'>
            <WatchLaterIcon /> {book.audio_length} menit
          </p>
        </span>
        <hr />
        <h4>Tentang buku ini?</h4>
        <p>{book.description}</p>
        <div className='section' onClick={() => setIsActive(!isActive)}>
          <h4>Apa saja di dalamnya?</h4>{' '}
          {isActive ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </div>

        {isActive &&
          book.sections.map((section) => (
            <li key={section.title}>
              {section.title}
              <p>{section.content}</p>
            </li>
          ))}
      </div>
    </div>
  );
};

export default Book;
