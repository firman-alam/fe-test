import { useCategoryBookQuery } from '../../services/books';
import './Categories.css';
import Category from '../Category/Category';

const Categories = () => {
  const { data, error, isLoading } = useCategoryBookQuery();
  console.log(data);

  return (
    <div className='categories'>
      {error ? (
        <>Oh no, something went wrong...</>
      ) : isLoading ? (
        <>Loading data...</>
      ) : data ? (
        <>
          {data.map((category) => (
            <Category key={category.id} category={category} />
          ))}
        </>
      ) : (
        'No data...'
      )}
    </div>
  );
};

export default Categories;
