function CountryInfo(props) {
  return (
    <section>
      <p>{props.aCountry} is flat</p>
      <p>
        {props.aCountry} has {props.windmillCount} windmills
      </p>
      <p>{props.aCountry} has lots of cyclists</p>
    </section>
  );
}

export default CountryInfo;
