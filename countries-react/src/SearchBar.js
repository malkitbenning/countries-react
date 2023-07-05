import React, { useEffect } from "react";
import "./SearchBar.css";

function SearchBar(props) {
  useEffect(() => {
    if (props.searchInput === "") {
      props.setCountriesListFiltered([...props.countriesAll]);
    } else {
      let filterArray = props.countriesAll.filter((aCountry) => {
        return (
          aCountry.name
            .toUpperCase()
            .includes(props.searchInput.toUpperCase()) ||
          (aCountry.capital &&
            aCountry.capital
              .toUpperCase()
              .includes(props.searchInput.toUpperCase()))
        );
      });
      props.setCountriesListFiltered([...filterArray]);
    }
  }, [props.searchInput]);

  function handleSearchChange(event) {
    props.setSearchInput(event.target.value);
  }

  return (
    <div className="search-bar">
      <div className="search-bar-container">
        <i className="fa fa-search" aria-hidden="true"></i>
        <input
          className="search-input"
          type="text"
          value={props.searchInput}
          // onChange={updateSearchInput}
          onChange={handleSearchChange}
          placeholder="Search for a country..."
        />
      </div>
    </div>
  );
}

export default SearchBar;
