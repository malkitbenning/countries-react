import React, { useState, useEffect } from "react";
import "./SearchBar.css";
import RegionSelect from "./RegionSelect";

function SearchBar(props) {
  const [chosenRegion, setChosenRegion] = useState("none");

  useEffect(() => {
    let countriesList = [];
    console.log("region: ", chosenRegion);
    if (chosenRegion === "none") {
      countriesList = [...props.countriesAll];
    } else {
      countriesList = props.countriesAll.filter((aCountry) => {
        return aCountry.region === chosenRegion;
      });
    }
    if (props.searchInput === "") {
      props.setCountriesListFiltered([...countriesList]);
    } else {
      let filterArray = countriesList.filter((aCountry) => {
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
  }, [props.searchInput, chosenRegion]);

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
      <div>
        <RegionSelect
          regionList={props.regionList}
          chosenRegion={chosenRegion}
          setChosenRegion={setChosenRegion}
        />
      </div>
    </div>
  );
}

export default SearchBar;
