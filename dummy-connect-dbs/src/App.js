import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import MoviesList from "./components/MoviesList";
import AddMovie from "./components/AddMovie";
import "./App.css";
// firebase: kind of backend without write any code ->
// give full backend app, complete REST API -> get data, send data
const App = function () {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState(null);

  const fetchMovieHandler = useCallback(async function () {
    try {
      // until loading data
      setIsLoading(true);
      setErrors(null);
      const response = await fetch(
        "https://react-http-74f7e-default-rtdb.firebaseio.com/movies.json"
      );
      if (!response.ok) {
        throw new Error("SOMETHING WENT WRONG");
      }
      const data = await response.json();
      let movies = [];
      for (let mov in data) {
        movies.push({...data[mov], id: mov})
      }
      
      setMovies(movies);
    } catch (err) {
      setErrors(err.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMovieHandler();
  }, [fetchMovieHandler]);

  const addMovieHandler = async function (enteredMovie) {
    const response = await fetch(
      "https://react-http-74f7e-default-rtdb.firebaseio.com/movies.json",
      {
        method: "POST",
        body: JSON.stringify(enteredMovie),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };

  let content = <p>FOUND NO MOVIES</p>;

  if (isLoading) {
    content = <p>LOADING DATA....</p>;
  }
  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }
  if (errors) {
    content = <p style={{ color: "red", fontWeight: 900 }}>{errors}</p>;
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
};

export default App;
