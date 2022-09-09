import { useSelector } from 'react-redux';
import { useListBookQuery } from '../../services/books';
import Book from '../Book/Book';
import './Books.css';

const Books = () => {
  const { id, page } = useSelector((state) => state.book);
  const { data, error, isLoading } = useListBookQuery(id, page);

  return (
    <>
      {error ? (
        <>Oh no, something went wrong...</>
      ) : isLoading ? (
        <>Loading data...</>
      ) : data ? (
        <>
          {data.map((book) => (
            <Book key={book.id} book={book} />
          ))}
        </>
      ) : (
        'No data...'
      )}
    </>
  );
};

export default Books;
