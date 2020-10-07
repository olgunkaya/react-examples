import React, { useEffect, useState } from "react";
import Dropdown from "./components/Dropdown";
import Search from "./components/Search";
import Translate from "./components/Translate";
import Accordian from "./components/Accordian";
import Route from "./components/Route";
import Header from "./components/Header";

const items = [
  { title: "what is react ?", content: "it is a Javascript framework" },
  { title: "why to use react ? ", content: "just for fun" },
  {
    title: "how to use react ? ",
    content: "we create components in order to use it :) ",
  },
];

const options = [
  {
    label: "This is red",
    value: "red",
  },
  {
    label: "This is green",
    value: "green",
  },

  {
    label: "This is blue",
    value: "blue",
  },
];

const App = () => {
  const [selectedColor, setSelectedColor] = useState(options[0]);

  console.log("Rerender [parent]");
  return (
    <div>
      <Header />
      <Route path="/">
        <Accordian items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select Color"
          options={options}
          onSelectedChange={setSelectedColor}
          selectedItem={selectedColor}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};

export default App;
