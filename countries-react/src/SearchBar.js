import React, { useState, useEffect } from "react";
import "./SearchBar.css";
import RegionSelect from "./RegionSelect";

function SearchBar(props) {

  const {
    searchInput,
    setSearchInput,
    setCountriesListFiltered,
    countriesAll,
    regionList,
  } = props;

  const [chosenRegion, setChosenRegion] = useState("none");

  useEffect(() => {
    let countriesList = [];
    if (chosenRegion === "none") {
      countriesList = [...countriesAll];
    } else {
      countriesList = countriesAll.filter((aCountry) => {
        return aCountry.region === chosenRegion;
      });
    }
    if (searchInput === "") {
      setCountriesListFiltered([...countriesList]);
    } else {
      let filterArray = countriesList.filter((aCountry) => {
        return aCountry.name.toUpperCase().includes(searchInput.toUpperCase()) || (aCountry.capital && aCountry.capital.toUpperCase().includes(searchInput.toUpperCase()));
      });
      setCountriesListFiltered([...filterArray]);
    }
  }, [searchInput, chosenRegion, countriesAll, setCountriesListFiltered]);

  function handleSearchChange(event) {
    setSearchInput(event.target.value);
  }

  return (
    <div className="search-bar">
      <div className="search-bar-container">
        <i className="fa fa-search" aria-hidden="true"></i>
        <input
          className="search-input"
          type="text"
          value={searchInput}
          // onChange={updateSearchInput}
          onChange={handleSearchChange}
          placeholder="Search for a country..."
        />
      </div>
      <div>
        <RegionSelect
          regionList={regionList}
          chosenRegion={chosenRegion}
          setChosenRegion={setChosenRegion}
        />
      </div>
    </div>
  );
}

export default SearchBar;
