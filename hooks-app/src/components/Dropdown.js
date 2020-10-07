import React, { useEffect, useRef, useState } from "react";

const Dropdown = ({ options, label, selectedItem, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(); //ref.current returns the DOM element.

  useEffect(() => {
    const bodyClickListener = ({ target }) => {
      if (ref.current.contains(target)) {
        return;
      }
      setOpen(false);
    };

    document.body.addEventListener("click", bodyClickListener);

    return () => {
      document.body.removeEventListener("click", bodyClickListener);
    };
  }, []);

  const renderedOptions = options.map((item) => {
    if (item.value === selectedItem.value) {
      return null;
    }
    return (
      <div
        key={item.value}
        className="item"
        onClick={() => {
          onSelectedChange(item);
        }}
      >
        {item.label}
      </div>
    );
  });

  return (
    <div className="ui form" ref={ref}>
      <div className="field">
        <label className="label">{label}</label>
        <div
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
          onClick={() => {
            setOpen(!open);
          }}
        >
          <i className="dropdown icon" />
          <div className="default text">{selectedItem.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
