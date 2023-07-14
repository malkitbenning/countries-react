import CountryDetailsContainer from "./CountryDetailsContainer";
import "./CountryDetails.css";

function CountryDetails(props) {
  function handleClick() {
    props.setCountryClicked(false);
  }

  return (
    <div>
      <button className="country-back-button" onClick={handleClick}>
        Back
      </button>

      {props.chosenCountryRecord && (
        <CountryDetailsContainer
          chosenCountryRecord={props.chosenCountryRecord}
          setACountryKey={props.setACountryKey}
        />
      )}
    </div>
  );
}

export default CountryDetails;
