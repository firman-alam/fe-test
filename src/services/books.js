import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const booksApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://asia-southeast2-sejutacita-app.cloudfunctions.net/',
  }),
  endpoints: (builder) => ({
    listBook: builder.query({
      query: (id = 1, page = 0) =>
        `fee-assessment-books?categoryId=${id}&page=${page}&size=5`,
    }),
    categoryBook: builder.query({
      query: () => `fee-assessment-categories`,
    }),
  }),
});

export const { useListBookQuery, useCategoryBookQuery } = booksApi;
