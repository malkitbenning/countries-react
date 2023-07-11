import React, { useState, useEffect } from "react";
import countriesAll from "./countriesAll.json";
import SearchBar from "./SearchBar";
import Countries from "./Countries";
import "./App.css";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [countriesListFiltered, setCountriesListFiltered] =
    useState(countriesAll);
  const [regionList, setRegionList] = useState([]);

  useEffect(() => {
    setRegionList([
      "none",
      ...new Set(countriesAll.map((item) => item.region)),
    ]);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h2 className="world-header">Where in the world?</h2>
      </header>
      <section>
        <SearchBar
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          countriesListFiltered={countriesListFiltered}
          setCountriesListFiltered={setCountriesListFiltered}
          countriesAll={countriesAll}
          regionList={regionList}
        />
      </section>
      <section>
        <Countries countriesAll={countriesListFiltered} />
      </section>
    </div>
  );
}

export default App;
