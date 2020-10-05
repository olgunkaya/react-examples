import React from "react";
import unsplash from "../api/Unsplash";
import ImageList from "./ImageList";
import SearchBar from "./SearchBar";

class App extends React.Component {
  /* 
  this is the Promise way of making a network call. 
  onSearchSubmit(term) {
    axios
      .get("https://api.unsplash.com/search/photos", {
        params: { query: term },
        headers: {
          Authorization:
            "Client-ID JK6tZ03HsIPksRYk56LXvveU9IKXKmU-aIA6yfiKdBE",
        },
      })
      .then((response) => console.log(response.data.results));
  } */

  state = { images: [] }; //since the response is an array better to with an empty array.

  onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        {/* here we can set the name anything we wanted. But wanted to make sure 
         that we comply with naming. For standart JSX elements like input, form etc.. 
         We have to provide exact name that element requires.
        */}
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
