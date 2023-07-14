function BorderButtons(props) {
  function clickHandler(aBorder) {
    console.log(aBorder);
    props.setACountryKey(aBorder);
  }

  return (
    <div>
      {props.bordersList.map((aBorder) => {
        return (
          <button
            onClick={() => {
              clickHandler(aBorder);
            }}
          >
            {aBorder}
          </button>
        );
      })}
    </div>
  );
}

export default BorderButtons;
