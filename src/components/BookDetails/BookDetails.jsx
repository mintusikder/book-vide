import React from "react";
import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const data = useLoaderData();
  console.log(data);
  const singleBook = data.find((book) => book.bookId === bookId);
  console.log(singleBook);
  const { image, bookName, publisher, review, rating, tags } = singleBook;
  return (
    <div className="pt-12">
      <div className="md:flex gap-20">
        <div className=" md:w-1/2 p-10 bg-base-100 shadow-sm rounded-xl flex justify-center mx-auto">
          <img className="md:h-[500px] w-[400px]" src={image} alt="" />
        </div>
        <div className="md:w-1/2 space-y-3 p-6">
          <h3 className="text-3xl">{bookName}</h3>
          <h5>By : {publisher}</h5>
          <hr className="w-full" />
          <p>Fiction</p>
          <hr />
          <p>
            <span className="font-bold">Review : </span> {review}
          </p>
          <div className="flex">
            {" "}
            <span className="font-bold">Tags : </span>
            {tags.map((tag) => (
              <div className="badge badge-soft badge-success mr-2 mb-3">
                {tag}
              </div>
            ))}
          </div>
          <hr />
          <p>Rating : {rating}</p>
         <div>
         <button className="btn btn-soft btn-success mr-3">Success</button>
         <button className="btn btn-soft btn-info">Info</button>
         </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
