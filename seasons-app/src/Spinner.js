import React from "react";

const Spinner = (props) => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">{props.message}</div>
    </div>
  );
};

/**
 * defaultProps for a component can be set to use
 * if there is no message sent from the calling component.
 */
Spinner.defaultProps = {
  message: "Loading...",
};

export default Spinner;
