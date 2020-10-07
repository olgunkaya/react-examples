import React, { useState } from "react";
import Convert from "./Convert";
import Dropdown from "./Dropdown";

const options = [
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Hindi",
    value: "hi",
  },
];

const Translate = () => {
  const [lang, setLang] = useState(options[0]);
  const [text, setText] = useState("");

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter text</label>
          <input type="text" onChange={({ target }) => setText(target.value)} />
        </div>
      </div>
      <Dropdown
        label="Select Language"
        options={options}
        selectedItem={lang}
        onSelectedChange={setLang}
      />
      <hr />
      <h3 className="ui heeader">Output</h3>
      <Convert text={text} language={lang} />
    </div>
  );
};

export default Translate;
