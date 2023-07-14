import "./CountryDetailsContainer.css";
import CountryDetailsDesc from "./CountryDetailsDesc";
import CountryDetailsTitle from "./CountryDetailsTitle";
import CountryDetailsBorders from "./CountryDetailsBorders";

function CountryDetailsContainer(props) {
  return (
    <div className="country-details-container">
      <div className="cd-flag-container">
        <img
          className="cd-flag-img"
          src={props.chosenCountryRecord.flag}
          alt="flag"
        />
      </div>
      <div className="cd-details-container">
        <CountryDetailsTitle chosenCountryRecord={props.chosenCountryRecord} />
        <CountryDetailsDesc chosenCountryRecord={props.chosenCountryRecord} />
        <CountryDetailsBorders
          chosenCountryRecord={props.chosenCountryRecord}
          setACountryKey={props.setACountryKey}
        />
      </div>
    </div>
  );
}

export default CountryDetailsContainer;
