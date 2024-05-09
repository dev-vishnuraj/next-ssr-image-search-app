import { useState } from "react";
import "../styles/searchbar.css";
import Dropdown from "./dropdown";
import { IoSearch } from "react-icons/io5";
import { FaCamera } from "react-icons/fa6";

const Searchbar = () => {
  const maxCharLimit = 32;
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChange = (e: { target: { value: any } }) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  const isOverCharLimit = searchValue.length > maxCharLimit;

  return (
    <div className="search-container">
      <div className="search-section">
        <div className="search-bar-dropdown">
          <Dropdown options={["All Images", "Creative", "Editorial"]} />
        </div>
      </div>
      <div className="search-area">
        <IoSearch />
        <input
          className={`search-input ${isOverCharLimit ? "warning" : ""}`}
          type="text"
          placeholder="Search"
          value={searchValue}
          onChange={handleSearchInputChange}
          maxLength={maxCharLimit}
        />
      </div>
      <div className="search-by-image">
        <div className="search-by-image-icon">
          <FaCamera />
        </div>
        <div className="search-by-image-content">Search by image</div>
      </div>
    </div>
  );
};

export default Searchbar;
