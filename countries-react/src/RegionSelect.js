import React, { useState } from "react";
import "./RegionSelect.css";

function RegionSelect(props) {
  return (
    <select
      className="region-select"
      onChange={(event) => {
        props.setChosenRegion(event.target.value);
      }}
    >
      {props.regionList.map((aRegion, index) => {
        return (
          <option key={index} value={aRegion}>
            {aRegion}
          </option>
        );
      })}
    </select>
  );
}

export default RegionSelect;
