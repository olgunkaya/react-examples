import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };
  /** 
   * Just to get rid of undefined this issue on our projects. There are some ways. two of the show in this comment. 
   * third one is applied for our actual running code.
   * (a) binding the function is a way to solve the issue of undefined this. 
        constructor() {
            super(props);

            this.onFormSubmit = this.onFormSubmit.bind(this);
        }

     (b) Another way is to set call back of the element with an arrow function. This time make sure the function is called.
        <form className="ui form" onSubmit={ (event) => this.onFormSubmit(event)}>
    * 
    * (c) third way just we did like below. Define function as an arrow function. Arrow functions bind "this" automatically.
    * 
*/

  // Arrow function makes sure the function binds to this automatically.
  onFormSubmit = (event) => {
    event.preventDefault();

    //class based components can access to the props via this. e.g this.props.propertyName
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
