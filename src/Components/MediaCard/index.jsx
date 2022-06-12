import React from "react";
import { posterImageMap } from "../utils/GetImage";
import NoImage from "../../Assets/noImage.png";

const MediaCard = ({ movie }) => {

  const image = posterImageMap.get(movie["poster-image"].split(".")[0])
  return (
    <div className="mb-10 w-2/6">
      <div className="ml-2 mr-2">
        <img
          src={image||NoImage}
          alt="poster"
        />
        <h4 className="text-base text-white mt-2">{movie.name}</h4>
      </div>
    </div>
  );
};

export default MediaCard;
