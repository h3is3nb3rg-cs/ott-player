import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../Actions";
import MediaCard from "../MediaCard";

const Genre = () => {
  const dispatch = useDispatch();
  const { movies, total } = useSelector((state) => state);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    handleFetchMovies("1");
  }, []);

  const handleFetchMovies = (page) => {
    dispatch(fetchMovies(page));
  };

  const loadMore = (e) => {
    var bottom =
      e.target.scrollHeight - e.target.clientHeight - e.target.scrollTop < 300;
    if (bottom && movies.length < parseInt(total)) {
      let pageNo = pageNumber + 1;
      setPageNumber(pageNo);
      handleFetchMovies(pageNo.toString());
    }
  };

  return (
    <>
      <div
        className="flex justify-start pt-20 ml-2 mr-2 flex-wrap  h-screen overflow-y-auto hide-scrollbar"
        onScroll={loadMore}
      >
        {movies && movies.length ? (
          movies.map((item, index) => <MediaCard movie={item} key={index} />)
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
