import React from "react";
import { GlobalContext } from "../context/context";
import styles from "./css/Search.module.css";

const Search = () => {
  const { query, setQuery, isError } = GlobalContext();
  return (
    <div className={styles.searchDiv}>
      <h1>Search your favourite Movie</h1>
      <input
        placeholder="Search Movie"
        type={"text"}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div>
        <h5 className={styles.red}>{isError.show && isError.msg}</h5>
      </div>
    </div>
  );
};

export default Search;
