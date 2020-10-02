import "./SeasonDisplay.css";
import React from "react";

const seasonConfig = {
  summer: {
    text: "Let's hit the summer",
    iconName: "sun",
  },
  winter: {
    text: "Brrr, it's breezein!",
    iconName: "snowflake",
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  }

  return lat > 0 ? "winter" : "summer";
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth);

  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left icon huge ${iconName}`} />
      <h1>{text}</h1>
      <i className={`icon-right icon huge ${iconName}`} />
    </div>
  );
};

export default SeasonDisplay;
