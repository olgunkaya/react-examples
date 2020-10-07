import React, { useState } from "react";

const Accordian = ({ items }) => {
  // array destructuring to access to first and second elements.
  const [activeIndex, setActiveIndex] = useState(null);

  const onClick = (event, index) => {
    setActiveIndex(index);
  };

  const createRenderedItem = (item, index) => {
    const status = activeIndex === index ? "active" : "";
    return (
      <React.Fragment key={item.title}>
        <div
          className={`title ${status}`}
          onClick={(event) => onClick(event, index)}
        >
          <i className="dropdown icon" />
          {item.title}
        </div>
        <div className={`content ${status}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  };

  const renderedItems = items.length
    ? items.map((item, index) => {
        return createRenderedItem(item, index);
      })
    : "No item sent for the list";

  return (
    <div className="ui styled accordion">
      <span>{renderedItems}</span>
    </div>
  );
};

export default Accordian;
