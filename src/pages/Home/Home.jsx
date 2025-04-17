import React from "react";
import Banner from "../../components/Banner/Banner";
import Books from "../Books/Books";

const Home = () => {
  return (
    <div>
      <div className="py-12">
        <Banner></Banner>
      </div>
      <Books></Books>
    </div>
  );
};

export default Home;
