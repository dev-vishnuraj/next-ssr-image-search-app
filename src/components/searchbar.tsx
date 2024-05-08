import "../styles/searchbar.css";
import Dropdown from "./dropdown";

const Searchbar = () => {
  return (
    <div className="search-container">
      <div>
        <div className="dropdown">
          <Dropdown options={["All", "Creative", "Editorial"]} />
        </div>
      </div>
      <div>Search</div>
      <div>Search by image</div>
    </div>
  );
};

export default Searchbar;
