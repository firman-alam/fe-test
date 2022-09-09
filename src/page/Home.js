import React from 'react';
import Books from '../components/Books/Books';
import Categories from '../components/Categories/Categories';
import Pagination from '../components/Pagination/Pagination';
import Search from '../components/Search/Search';

const Home = () => {
  return (
    <>
      <Search />
      <Categories />
      <Pagination />
      <Books />
    </>
  );
};

export default Home;
