// import react and react-dom libraries
import React from "react";
import dom from "react-dom";
//create react component
/*  NOTES
Styling
	A. Inline style definition => style={{styleName: 'styleValue' }}

		a. First { => we use a javascript variable inside jsx.
		b. Second { => our variable is an object
		c. Any style property name can not have - in the name. Remove and go with camel case. 
			border-color -> borderColor
		
	B. Class based styling
		a. Class -> className

Variables
	1. In order to access to a javascript variable in jsx. Simply surround it with {}
	2. Even a function call can be triggered here too
 */

const bText = "click hereee";
function getButtonText() {
  return bText;
}

const App = () => {
  return (
    <div>
      <label className="label" htmlFor="input">
        enter name:
      </label>
      <input type="text" id="input" className="i-name"></input>
      <button style={{ backgroundColor: "red", color: "white" }}>
        {getButtonText()}
      </button>
    </div>
  );
};

dom.render(<App />, document.getElementById("root"));

//take the react the component and show it on the screen
