import "./CardImageContainer.css";

function CardImageContainer(props) {
  return (
    <div className="card-image-container">
      <img className="flag-image" src={props.flagURL} alt="country flag" />
    </div>
  );
}

export default CardImageContainer;
