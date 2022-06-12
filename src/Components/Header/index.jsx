import React, { useState } from "react";
import BackIcon from "../../Assets/Back.png";
import SearchIcon from "../../Assets/search.png";
import clsx from "clsx";
import "./index.css";
import { useDispatch } from "react-redux";
import { fetchMovies, searchMovies } from "../../Actions";

const Header = () => {
  const dispatch = useDispatch();
  const [showSearch, setShowSearch] = useState(false);
  const [searchString, setSearchString] = useState("");

  const handleSearch = (e) => {
    let searchVal = e.target.value;
    setSearchString(searchVal);
    if (searchVal === "") {
      dispatch(fetchMovies("1"));
    } else {
      dispatch(searchMovies(searchVal.toLowerCase()));
    }
  };

  return (
    <div className="h-20 w-full pb-4 fixed flex pr-4 pl-4 justify-between align-middle bg-fixed pt-8 header">
      <div className="flex">
        <div className="h-6 p-0.5">
          <img className="h-full mr-4" src={BackIcon} alt="Go Back" />
        </div>
        <h2 className="text-2xl font-medium text-white leading-6 truncate">
          Romantic Comedy
        </h2>
      </div>
      <div className="h-6 p-0.5 flex justify-end">
        <input
          type="text"
          className={clsx(
            "bg-transparent border-b focus-visible:outline-0 text-white",
            showSearch ? "w-4/5" : " w-0"
          )}
          placeholder="Search for titles"
          value={searchString}
          onChange={handleSearch}
        />
        <img
          className="h-full"
          src={SearchIcon}
          alt="Search"
          onClick={() => setShowSearch(!showSearch)}
        />
      </div>
    </div>
  );
};

export default Header;
