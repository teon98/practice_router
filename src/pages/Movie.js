import React from "react";
import { getMovie, getMovies } from "../movie_data";
import { useParams, useLocation, useSearchParams } from "react-router-dom";
import styles from "../css/styles.module.css";

const Movie = () => {
  //URL 파라미터 사용하기
  const params = useParams();
  console.log(params);
  const movie = getMovie(parseInt(params.movieId));
  console.log(movie);

  //쿼리 스트링 사용하기
  const location = useLocation();
  console.log(location);

  const [searchParams, setSearchParams] = useSearchParams();
  const detail = searchParams.get("detail");

  const handleClick = () => {
    setSearchParams({ detail: detail === "true" ? false : true });
    console.log(detail);
  };

  return (
    <div className={styles.movie}>
      <h2>{movie.title}</h2>
      <p>
        <span>감독</span>: {movie.director}
      </p>
      <p>
        <span>카테고리</span>: {movie.category}
      </p>
      <button onClick={handleClick} type="button">
        자세히
      </button>
      {detail === "true" ? <p>{movie.detail}</p> : " "}
    </div>
  );
};

export default Movie;
