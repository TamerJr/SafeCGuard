// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
// const url="https://hapi-books.p.rapidapi.com/nominees"
const RapidAPI_Key = process.env.NEXT_PUBLIC_RAPID_API_KEY;
export const BooksApi = createApi({
  reducerPath: "BooksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://hapi-books.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", RapidAPI_Key),
        headers.set("X-RapidAPI-Host", "hapi-books.p.rapidapi.com");
    },
  }),
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: (genre) => `/nominees/${genre}/2020`,
    }),
    getBookDetails:builder.query({
      query:(id)=>`/book/${id}` 
    })
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetBooksQuery } = BooksApi;
