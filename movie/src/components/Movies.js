import React from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../context/context";
import styles from "./css/Home.module.css";

const Movies = () => {
  const { movies, isLoading } = GlobalContext();

  if (isLoading) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }
  return (
    <div className={styles.moviesContainer}>
      {movies.map((ele) => {
        const { imdbID, Title, Poster } = ele;
        const movieTitle = Title.substring(0, 15);
        return (
          <NavLink key={imdbID} to={`movie/${imdbID}`}>
            <div>
              <h2>{Title.length > 15 ? `${movieTitle}...` : `${Title}`}</h2>
              <img src={Poster} alt={Title} />
            </div>
          </NavLink>
        );
      })}
    </div>
  );
};

export default Movies;
