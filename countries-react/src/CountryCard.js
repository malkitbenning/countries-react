import CardImageContainer from "./CardImageContainer";
import "./CountryCard.css";

function CountryCard(props) {
  return (
    <div className="country-card">
      <CardImageContainer flagURL={props.aCountry.flag} />
      <div className="card-details-container">
        <p className="country-title">{props.aCountry.name}</p>
        <p className="strong-text">
          Population:{" "}
          <span className="normal-text">{props.aCountry.population}</span>
        </p>

        <p className="strong-text">
          Region: <span className="normal-text">{props.aCountry.region}</span>
        </p>
        <p className="strong-text">
          Capital: <span className="normal-text">{props.aCountry.capital}</span>
        </p>
      </div>
    </div>
  );
}

export default CountryCard;
