import Image from "next/image";
import Link from "next/link";
import React from "react";

const BookDetails = ({ prod }) => {
  
  return (
    <section
      className="flex justify-around flex-col items-center
     text-center w-40 h-full overflow-hidden shadow-xl border rounded-md "
    >
      <Link href={`/shop/${prod.book_id}`}>
        <Image
          src={prod?.cover}
          className="w-full h-48 p-0 object-contain rounded-md shadow-md"
          width={500}
          height={500}
          alt={`${prod?.cover} Image`}
        />
        <h4 className="font-thin text-xs pt-2">{prod?.name.substring(0, 10)}...</h4>
      </Link>
    </section>
  );
};

export default BookDetails;
