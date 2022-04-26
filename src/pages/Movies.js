import React from "react";
import { Link, Outlet, NavLink } from "react-router-dom";
import { getMovies } from "../movie_data";
import styles from "../css/styles.module.css";

const movies = () => {
  const movies = getMovies();

  return (
    <div className={styles.movies}>
      <h1>넷플릭스 영화 추천 목록</h1>
      <div className={styles.list}>
        {movies.map((movie) => (
          <NavLink
            to={`/movies/${movie.id}`}
            key={movie.id}
            style={({ isActive }) => {
              return {
                color: isActive ? "#FF9E1B" : "",
              };
            }}
          >
            {movie.title}
          </NavLink>
        ))}
      </div>
      <hr />

      <Outlet />
    </div>
  );
};

export default movies;
