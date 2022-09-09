import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: 1,
  page: 1,
};

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    getCategoryId: (state, action) => {
      state.id = action.payload;
    },
    setPage: (state, action) => {
      state.page += 1;
    },
  },
});

export const { getCategoryId, setPage } = bookSlice.actions;
export default bookSlice.reducer;
