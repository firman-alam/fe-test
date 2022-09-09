import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  book: {},
};

export const bookmarkSlice = createSlice({
  name: 'bookmark',
  initialState,
  reducers: {
    getBookmark: (state, action) => {
      return { ...state.book, [action.payload]: action.payload };
    },
    removeBookmark: (state, action) => {
      state.book = [];
    },
  },
});

export const { getBookmark, removeBookmark } = bookmarkSlice.actions;
export default bookmarkSlice.reducer;
