import React, { useState} from "react";
import LanguageDropdown from "../Dropdown";
import LanguageConverter from "./LanguageConverter";

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
  {
    label: "Dutch",
    value: "nl",
  },
  {
    label: "Bangla",
    value: "bn",
  },
  {
    label: "Irish",
    value: "ga",
  },
  {
    label: "Albanian",
    value: "sq",
  },
  {
    label: "Italian",
    value: "it",
  },
  {
    label: "Japanese",
    value: "ja",
  },
  {
    label: "Korean",
    value: "ko",
  },
  {
    label: "Chinese Simplified",
    value: "zh-CN",
  },
  {
    label: "Czech",
    value: "cs",
  },
  {
    label: "Portuguese",
    value: "pt",
  },
  {
    label: "Romanian",
    value: "ro",
  },
  {
    label: "English",
    value: "en",
  },
  {
    label: "Russian",
    value: "ru",
  },
  {
    label: "Finnish",
    value: "fi",
  },
  {
    label: "French",
    value: "fr",
  },
  {
    label: "Spanish",
    value: "es",
  },
  {
    label: "Tamil",
    value: "ta",
  },
  {
    label: "Turkish",
    value: "tr",
  },
  {
    label: "Urdu",
    value: "ur",
  },
];

const Translator = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");

  return (
    <div className="w-3/4 mx-auto h-80 mt-16 bg-green-700 text-white">
      <div className="w-100 ">
        <input
          type="text"
          onChange={(e) => setText(e.target.value)}
          placeholder="Search the word"
          className="w-3/5 h-8 ml-12 mt-4 text-black  px-4 outline-none bg-blue-100"
        />
      </div>
      <div>
        <LanguageDropdown
          label="Select a language"
          options={options}
          selected={language}
          onSelectedChange={setLanguage}
        />
      </div>

      <div>
        <span>
          <LanguageConverter
            language={language}
            text={text}
          ></LanguageConverter>
        </span>
      </div>
    </div>
  );
};

export default Translator;
