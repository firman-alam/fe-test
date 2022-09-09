import { configureStore } from '@reduxjs/toolkit';
import { booksApi } from './services/books';
import bookReducer from './services/bookSlice';
import bookmarkReducer from './services/bookmarkSlice';

export const store = configureStore({
  reducer: {
    [booksApi.reducerPath]: booksApi.reducer,
    book: bookReducer,
    bookmark: bookmarkReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(booksApi.middleware),
});
