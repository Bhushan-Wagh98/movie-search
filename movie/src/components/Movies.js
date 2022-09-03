import React from "react";
import { GlobalContext } from "../context/context";

const Movies = () => {
  const { movies } = GlobalContext();
  console.log(movies);
  return (
    <div>
      <h1>Movies</h1>
      {movies.map((ele) => {
        return <div key={ele.imdbID}>{ele.Title}</div>;
      })}
    </div>
  );
};

export default Movies;
