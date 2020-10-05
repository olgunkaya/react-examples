import React from "react";

const users = [
  { id: 1, name: "Leanne Graham" },
  { id: 2, name: "Ervin Howell" },
  { id: 3, name: "Clementine Bauch" },
  { id: 4, name: "Patricia Lebsack" },
];

export default class Test extends React.Component {
  renderList = (list) => {
    return list.map((elem) => {
      return <li key={elem.id}>{elem.name}</li>;
    });
  };

  render() {
    return <ul>{this.renderList(users)}</ul>;
  }
}
