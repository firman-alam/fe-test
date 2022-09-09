import './ListBookmark.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ListBookmark = () => {
  const { book } = useSelector((state) => state.bookmark);
  console.log(book);
  return (
    <div className='listBookmark'>
      <h2>List Bookmark</h2>

      <Link to='/'>
        <button>Home</button>
      </Link>
    </div>
  );
};

export default ListBookmark;
