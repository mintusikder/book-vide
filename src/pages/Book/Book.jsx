import React from "react";
import { Star } from "lucide-react";
const Book = ({ book }) => {
  console.log(book);
  const { image, bookName, publisher, rating, tags } = book;
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure className="px-10 pt-10">
        <img
          src={image}
          alt="Shoes"
          className="rounded-xl h-[250px] w-[250px]"
        />
      </figure>
      <div className=" py-6  px-16">
        {tags.map((tag) => (
          <div className="badge badge-soft badge-success mr-2 mb-3">{tag}</div>
        ))}
        <h2 className="card-title mb-1">{bookName}</h2>
        <p className="mb-2">By : {publisher}</p>
        <hr />
        <div className="flex justify-between mt-2">
          <p>Fiction</p>
          <div className="flex  items-center justify-center">
            <p className="mr-1">{rating}</p>
            <Star />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
