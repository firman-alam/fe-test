import { useDispatch } from 'react-redux';
import { getCategoryId } from '../../services/bookSlice';
import './Category.css';

const Category = ({ category }) => {
  const dispatch = useDispatch();

  const listBook = (category) => {
    dispatch(getCategoryId(category.id));
  };

  return (
    <>
      <nav className='category'>
        <button onClick={() => listBook(category)}>{category.name}</button>
      </nav>
    </>
  );
};

export default Category;
