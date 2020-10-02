import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

/**
 * State is a JS object contains data related to our component
 * State must be initialized when the component created.
 * State  CAN ONLY BE UPDATED bu setState method!!!!!!!!!!!!!!
 */
class App extends React.Component {
  /*   
this is the first method to be called. But in reality it is no needed. Because babel will generate it for us either way. 
    constructor(props) {
        // parent should have the props first. just like Java.
        super(props);

        // THIS IS THE ONLY TIME WE UPDATE STATE / INITIALIZE
        this.state = {
            message: "Loading...",
        };
    } */

  /**
   * instead of manually writing constructor only to set state.
   */
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: -1 });
      },
      (error) => {
        // No need to update all properties in a state.
        this.setState({ errorMessage: error.message });
      }
    );
  }

  componentDidUpdate(args) {
    console.log(`Update args : ${args}`);
  }

  // this has to be defined!
  render() {
    if (this.state.lat && !this.state.errorMessage) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    if (!this.state.lat && this.state.errorMessage) {
      return <div>Error : {this.state.errorMessage}</div>;
    }

    return <div>Loading...</div>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
