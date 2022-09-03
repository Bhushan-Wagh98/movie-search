import React from "react";
import Movies from "./Movies";
import Search from "./Search";

const Home = () => {
  return (
    <div>
      <Search />
      <Movies />
    </div>
  );
};

export default Home;

//http://www.omdbapi.com/?apikey=34511c28&s=avengers
