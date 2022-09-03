import React from "react";
import { GlobalContext } from "../context/context";

const Search = () => {
  const { query, setQuery, isError } = GlobalContext();
  return (
    <div>
      <h2>Search your favourite Movie</h2>
      <input
        placeholder="Search Movie"
        type={"text"}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div>
        <p>{isError.show && isError.msg}</p>
      </div>
    </div>
  );
};

export default Search;
