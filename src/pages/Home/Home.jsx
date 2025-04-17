import React from "react";
import Banner from "../../components/Banner/Banner";
import { useLoaderData } from "react-router";
import Books from "../Books/Books";

const Home = () => {
  const books = useLoaderData();
  return (
    <div>
      <div className="md:py-12 pb-12">
        <Banner></Banner>
      </div>
      <Books books={books}></Books>
    </div>
  );
};

export default Home;
