import React, { useEffect, useState } from "react";
import TranslateApi from "../folder/TranslateApi";

const Convert = ({ language, text }) => {
  const [output, setOutput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchTerm(text);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [text]);

  useEffect(() => {
    const translate = async () => {
      const {
        data: {
          data: { translations },
        },
      } = await TranslateApi.post(
        "https://translation.googleapis.com/language/translate/v2",
        null,
        {
          params: {
            q: searchTerm,
            target: language.value,
          },
        }
      );

      setOutput(translations[0].translatedText);
    };

    if (searchTerm) {
      translate();
    }
  }, [searchTerm, language]);

  return (
    <div>
      <h1 className="ui header">{output}</h1>
    </div>
  );
};

export default Convert;
