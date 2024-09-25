import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "../../../utils/axios";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovie] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    (async () => {
      try {
        console.log(fetchUrl);
        const request = await axios.get(fetchUrl);
        console.log(request);
        setMovie(request.data.results);
      } catch (error) {
        // console.log("error", error);
      }
    })();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row_posters">
        {movies?.map((movie, index) => (
          <img
            key={index}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Row;
