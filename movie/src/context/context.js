import { createContext, useContext, useEffect, useState } from "react";

const API_URL = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isLoading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [isError, setError] = useState({ show: false, msg: "" });
  const [query, setQuery] = useState("marvel");

  const getMovies = async (url) => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.Response === "True") {
        setLoading(false);
        setMovies(data.Search);
        setError({
          show: false,
          msg: "",
        });
      } else {
        setError({
          show: true,
          msg: data.Error,
        });
        setMovies([]);
        setLoading(false);
      }
      console.clear();
    } catch (err) {
      console.log(err);
      console.clear();
    }
  };
  useEffect(() => {
    let timerOut = setTimeout(() => {
      if (query === "") {
        getMovies(`${API_URL}&s=marvel`);
      } else {
        getMovies(`${API_URL}&s=${query}`);
      }
    }, 700);

    return () => clearTimeout(timerOut);
  }, [query]);
  return (
    <AppContext.Provider
      value={{ isLoading, movies, isError, query, setQuery }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const GlobalContext = () => {
  return useContext(AppContext);
};
