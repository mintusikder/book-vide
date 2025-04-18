import React from "react";

const ReadListCard = ({ read }) => {
  console.log(read);
  const { image, bookName, publisher, totalPages, rating } = read;
  return (
    <div className="card lg:card-side bg-base-100 shadow-sm">
      <figure className="h-[100px] w-[100px]">
        <img src={image} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{bookName}</h2>
        <p>By : {publisher}</p>
        <p>Total Pages : {totalPages}</p>
        <p>Rating: {rating}</p>
      </div>
    </div>
  );
};

export default ReadListCard;
