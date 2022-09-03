import { createContext, useContext, useEffect, useState } from "react";

const API_URL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;
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
        // console.log(data);
      } else {
        setError({
          show: true,
          msg: data.Error,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    let timerOut = setTimeout(() => {
      getMovies(`${API_URL}&s=${query}`);
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
