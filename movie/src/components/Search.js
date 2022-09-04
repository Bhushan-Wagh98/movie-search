import React from "react";
import { GlobalContext } from "../context/context";
import styles from "./css/Search.module.css";
import searchError from "./image/searchError.png";

const Search = () => {
  const { query, setQuery, isError, isLoading } = GlobalContext();
  return (
    <div className={styles.searchDiv}>
      <h1>Search your favourite Movie</h1>
      <input
        placeholder="Search Your Movie"
        type={"text"}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div>
        {isError.show && !isLoading ? (
          <div className={styles.notfound}>
            <h5 className={styles.red}>{isError.msg}</h5>
            <img src={searchError} alt="error" />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Search;
