import "./CountryDetailsBorders.css";
import BorderButtons from "./BorderButtons";

function CountryDetailsBorders(props) {
  console.log("borders", props.chosenCountryRecord.borders);

  return (
    <div className="cd-details-borders">
      <span className="cd-details-subtitle">Border Countries: </span>
      {props.chosenCountryRecord.borders ? (
        <BorderButtons
          bordersList={props.chosenCountryRecord.borders}
          setACountryKey={props.setACountryKey}
        />
      ) : (
        <span>no borders</span>
      )}
    </div>
  );
}

export default CountryDetailsBorders;
