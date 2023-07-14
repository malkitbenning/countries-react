import React, { useState, useEffect } from "react";
import countriesAll from "./countriesAll.json";
import SearchBar from "./SearchBar";
import Countries from "./Countries";
import CountryDetails from "./CountryDetails";
import "./App.css";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [countriesListFiltered, setCountriesListFiltered] =
    useState(countriesAll);
  const [regionList, setRegionList] = useState([]);
  const [countryClicked, setCountryClicked] = useState(false);
  const [aCountryKey, setACountryKey] = useState("");
  const [chosenCountryRecord, setChosenCountryRecord] = useState("");

  useEffect(() => {
    setRegionList([
      "none",
      ...new Set(countriesAll.map((item) => item.region)),
    ]);
  }, []);

  useEffect(() => {
    if (aCountryKey) {
      let aRecord = countriesAll.find((aRec) => {
        return aRec.alpha3Code === aCountryKey;
      });
      setChosenCountryRecord(aRecord);
    }
  }, [aCountryKey]);

  return (
    <div className="App">
      <header className="App-header">
        <h2 className="world-header">Where in the world?</h2>
      </header>
      {countryClicked === false && (
        <section className="all-countries-search">
          <SearchBar
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            setCountriesListFiltered={setCountriesListFiltered}
            countriesAll={countriesAll}
            regionList={regionList}
          />
        </section>
      )}

      {countryClicked === false && (
        <section className="all-countries-list">
          <Countries
            countriesAll={countriesListFiltered}
            setCountryClicked={setCountryClicked}
            setACountryKey={setACountryKey}
          />
        </section>
      )}

      {countryClicked === true && (
        <section className="country-detail">
          <CountryDetails
            countryClicked={countryClicked}
            setCountryClicked={setCountryClicked}
            chosenCountryRecord={chosenCountryRecord}
            setACountryKey={setACountryKey}
          />
        </section>
      )}
    </div>
  );
}

export default App;
