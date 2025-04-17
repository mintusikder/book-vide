import React from "react";
import bookImg from "../../assets/books.jpg";
const Banner = () => {
  return (

      <div className=" bg-base-200 p-6  py-16 md:flex justify-around items-center">
        <div className="mb-6">
          <h2 className="text-3xl font-bold pb-6">Books to freshen up <br /> your bookshelf</h2>
          <button className="btn btn-success text-white">View The List</button>
        </div>
        <img src={bookImg} alt="" />
      </div>

  );
};

export default Banner;
