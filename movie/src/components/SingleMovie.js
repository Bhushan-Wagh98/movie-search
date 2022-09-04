import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./css/Single.module.css";
import notfound from "./image/notfound2.png";

const SingleMovie = () => {
  const { id } = useParams();
  const [obj, setObj] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState({ show: false, msg: "" });
  const API_URL = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

  const getMovie = async (url) => {
    setLoading(true);
    try {
      let res = await fetch(url);
      let data = await res.json();
      if (data.Response === "True") {
        console.log(data);
        setLoading(false);
        setError({
          show: false,
          msg: "",
        });
        setObj(data);
      } else {
        setLoading(false);
        setError({
          show: true,
          msg: "Movie Not Found!",
        });
      }
      console.clear();
    } catch (error) {
      console.log(error);
      console.clear();
    }
  };

  useEffect(() => {
    getMovie(`${API_URL}&i=${id}`);
  }, []);

  if (isLoading) {
    return (
      <div>
        <h2 className={styles.loading}>Loading...</h2>
      </div>
    );
  }
  if (isError.show) {
    return (
      <div>
        <h1 className={styles.red}>{isError.msg}</h1>
        <h3>Please click the button below to Redirect to Home page</h3>
        <Link to={"/"}>
          <button className={styles.backToHome}>Back to Home</button>
        </Link>
        <div className={styles.notfound}>
          <img src={notfound} alt="Not found" />
        </div>
      </div>
    );
  }
  return (
    <>
      <div className={styles.singleContainer}>
        <div>
          <img src={obj.Poster} alt={obj.Title} />
          {+obj.imdbRating > 8 ? (
            <div className={styles.recomend}>Recomended</div>
          ) : null}
        </div>
        <div className={styles.movieContaint}>
          <h1>{obj.Title}</h1>
          <h3>{obj.Type}</h3>
          <h3>Genres: {obj.Genre}</h3>
          <h4>Actors: {obj.Actors}</h4>
          <h4>Directors: {obj.Director}</h4>
          <h4>Released: {obj.Released}</h4>
          <p>Language: {obj.Language}</p>
          <p>Plot: {obj.Plot}</p>
          <p>Runtime: {obj.Runtime}</p>
          <h3>Rated: {obj.Rated}</h3>
          <h2>IMDB Rating: {obj.imdbRating}/10</h2>
          <p>IMDB ID: {obj.imdbID}</p>
        </div>
      </div>
      <Link to={"/"}>
        <button className={styles.backToHome}>Back to Home</button>
      </Link>
    </>
  );
};

export default SingleMovie;
