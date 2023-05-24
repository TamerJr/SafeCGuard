"use client";
import React, { Fragment } from "react";
import BookDetails from "./BookDetails";
import { useGetBooksQuery } from "../GlobalRedux/Features/FetchDataSlice";

const BooksShilf = () => {
  const {
    data: Horror,
    isFetching: isHorrorFetching,
    isError: isHorrorError,
    error: HorrorError,
  } = useGetBooksQuery("horror");

  return (
    <div className="flex justify-start items-center overflow-x-auto scrollbar-hide gap-3 h-56   m-5">
        {Horror?.map((prod, index) => (
            <div key={index} className="w-40 h-full">
            <BookDetails prod={prod} />
      </div>
        ))}
    </div>
  );
};

export default BooksShilf;
