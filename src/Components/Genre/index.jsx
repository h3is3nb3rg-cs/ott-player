import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../Actions";
import MediaCard from "../MediaCard";

const Genre = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);

  useEffect(() => {
    handleFetchMovies("1");
  }, []);

  const handleFetchMovies = (page) => {
    dispatch(fetchMovies(page));
  };

  return (
    <>
      <div className="flex justify-start pt-20 ml-2 mr-2 flex-wrap  h-screen overflow-y-auto hide-scrollbar">
        {movies && movies.length ? (
          movies.map((item) => <MediaCard movie={item} />)
        ) : (
          <div className="flex text-white text-l m-auto">
            No Movies to Display.
          </div>
        )}
      </div>
    </>
  );
};

export default Genre;
