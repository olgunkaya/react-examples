import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

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


    !!!! class based components has props too. 
    class Welcome extends React.Component {
      render() {
        return <h1>Hello, {this.props.name}</h1>;
      }
    }


    } */

  /**
   * instead of manually writing constructor only to set state.
   */
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
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

  renderBody() {
    if (this.state.lat && !this.state.errorMessage) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    if (!this.state.lat && this.state.errorMessage) {
      return <div>Error : {this.state.errorMessage}</div>;
    }

    return <Spinner message="Please accept location request..." />;
  }
  /**
   * do not include too much logic or multy return in a render method.
   * Instead use helper functions to be able to reach them.
   */
  render() {
    return <div>{this.renderBody()}</div>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
