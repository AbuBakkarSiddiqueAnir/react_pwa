import React, { useState, useEffect } from "react";
import TranslatorApi from "./Api/TranslatorApi";

const LanguageConverter = ({ language, text, children }) => {
  const [translated, setTranslated] = useState("");

  const doTranslate = async () => {
    if (text !== "") {
      const { data } = await TranslatorApi(language, text);
      console.log(data)
      setTranslated(data.data.translations[0].translatedText);
    }
  };

  return (
    <div>
      <div>
        <button
          onClick={() => doTranslate()}
          className="w-3/5 text-2xl h-8 ml-12 mt-4 text-black hover:bg-blue-500  px-4 outline-none bg-blue-400"
        >
          Translate
        </button>
      </div>
      <div>
        <div className="text-2xl mt-4 mx-12 text-3xl">
          Translated Text : {translated}
        </div>
      </div>
    </div>
  );
};

export default LanguageConverter;
