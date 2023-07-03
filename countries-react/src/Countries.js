import CountryCard from "./CountryCard";
import "./Countries.css";

function Countries(props) {
  console.log(props.countriesAll);
  return (
    <div className="cards-container">
      {props.countriesAll.map((aCountry) => {
        return <CountryCard key={aCountry.alpha2Code} aCountry={aCountry} />;
      })}
    </div>
  );
}

export default Countries;