import Axios from "axios";
import React, { useEffect, useState } from "react";

export default () => {
  /**
   * 1st parameter is the function we will run
   * 2nd parameter is the array contains the condition
   * 2nd parameter decides when to trigger the first function
   */

  /* empty array -> run only at the initial render.
  useEffect(() => {
    console.log("I only run once");
  }, []); */

  /* no array, means to run after every render and at initial render
  useEffect(() => {
    console.log("I run after every render and at initial render!");
  }); 
 */

  /* called after initial render or called after a re-render and data it looks for changed 
  useEffect(() => {
    console.log("I run after every render and at initial render!");
  }, [term]); 
 */

  const [term, setTerm] = useState("programming");
  const [debauncedTerm, setDebauncedTerm] = useState(term);
  const [result, setResult] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebauncedTerm(term);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [term]);

  useEffect(() => {
    const search = async () => {
      const { data } = await Axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          format: "json",
          origin: "*",
          srsearch: debauncedTerm,
        },
      });
      console.log(data);
      setResult(data.query.search);
    };
    if (debauncedTerm.length) {
      search();
    }
  }, [debauncedTerm]);

  const renderedResult = result.map((item) => {
    return (
      <div className="item" key={item.pageid}>
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${item.pageid}`}
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{item.title}</div>
          {/* XSS Attack : This is really a dangerous code that can cause to be attacked!  */}
          <span dangerouslySetInnerHTML={{ __html: item.snippet }} />
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter search term</label>
          <input
            value={term}
            className="input"
            onChange={({ target: { value } }) => setTerm(value)}
          ></input>
        </div>
      </div>
      <div className="ui celled list">{renderedResult}</div>
    </div>
  );
};
