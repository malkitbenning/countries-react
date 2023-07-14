import "./CountryDetailsTitle.css";

function CountryDetailsTitle(props) {
  return (
    <div className="cd-details-title">
      <p>{props.chosenCountryRecord.name}</p>
    </div>
  );
}

export default CountryDetailsTitle;
