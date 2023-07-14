import CountryCard from "./CountryCard";
import "./Countries.css";

function Countries(props) {
  return (
    <div className="cards-container">
      {props.countriesAll.map((aCountry) => {
        return (
          <CountryCard
            key={aCountry.alpha3Code}
            countryId={aCountry.alpha3Code}
            aCountry={aCountry}
            setCountryClicked={props.setCountryClicked}
            setACountryKey={props.setACountryKey}
          />
        );
      })}
    </div>
  );
}

export default Countries;
