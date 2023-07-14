import "./CardImageContainer.css";

function CardImageContainer(props) {
  return (
    <div
      className="card-image-container"
      onClick={() => {
        props.setACountryKey(props.countryId);
        props.setCountryClicked(true);
      }}
    >
      <img className="flag-image" src={props.flagURL} alt="country flag" />
    </div>
  );
}

export default CardImageContainer;
