import React from "react";
import { posterImageMap } from "../utils/GetImage";

const MediaCard = ({ movie }) => {
  return (
    <div className="mb-10 w-2/6">
      <div className="ml-2 mr-2">
        <img
          src={posterImageMap.get(movie["poster-image"].split(".")[0])}
          alt="poster"
        />
        <h4 className="text-base text-white mt-2">{movie.name}</h4>
      </div>
    </div>
  );
};

export default MediaCard;
