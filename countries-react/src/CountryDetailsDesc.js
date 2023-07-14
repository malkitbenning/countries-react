import "./CountryDetailsDesc.css";

function CountryDetailsDesc(props) {
  let currenciesList = [];
  let currenciesAsString = "";
  if (props.chosenCountryRecord.currencies) {
    currenciesList = props.chosenCountryRecord.currencies.map(
      (aCurrency) => aCurrency.name
    );
    currenciesAsString = currenciesList.toString();
  } else {
    currenciesAsString = "not listed";
  }

  let languagesList = [];
  let languagesAsString = "";
  if (props.chosenCountryRecord.languages) {
    languagesList = props.chosenCountryRecord.languages.map(
      (aCurrency) => aCurrency.name
    );
    languagesAsString = languagesList.toString();
  } else {
    languagesAsString = "not listed";
  }

  return (
    <div className="cd-details-area">
      <div className="cd-details-col1">
        <p className="cd-details-subtitle">
          Native Name:{" "}
          <span className="cd-details-text">
            {props.chosenCountryRecord.nativeName}
          </span>
        </p>
        <p className="cd-details-subtitle">
          Population:{" "}
          <span className="cd-details-text">
            {props.chosenCountryRecord.population}
          </span>
        </p>
        <p className="cd-details-subtitle">
          Region:{" "}
          <span className="cd-details-text">
            {props.chosenCountryRecord.region}
          </span>
        </p>
        <p className="cd-details-subtitle">
          Sub Region:{" "}
          <span className="cd-details-text">
            {props.chosenCountryRecord.subregion}
          </span>
        </p>
        <p className="cd-details-subtitle">
          Capital:{" "}
          <span className="cd-details-text">
            {props.chosenCountryRecord.capital}
          </span>
        </p>
      </div>
      <div className="cd-details-col2">
        <p className="cd-details-subtitle">
          Top Level Domain:{" "}
          <span className="cd-details-text">
            {props.chosenCountryRecord.topLevelDomain}
          </span>
        </p>
        <p className="cd-details-subtitle">
          Currencies:{" "}
          <span className="cd-details-text">{currenciesAsString}</span>
        </p>
        <p className="cd-details-subtitle">
          Languages:{" "}
          <span className="cd-details-text"> {languagesAsString}</span>
        </p>
      </div>
    </div>
  );
}

export default CountryDetailsDesc;
