"use client";
import { configureStore } from "@reduxjs/toolkit";
import { BooksApi } from "./Features/FetchDataSlice";
export const store = configureStore({
    reducer:{
        [BooksApi.reducerPath]:BooksApi.reducer
    },
    //middleware connection
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(BooksApi.middleware),

});
