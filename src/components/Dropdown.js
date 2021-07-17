import React, { useState, useEffect, useRef } from "react";

const LanguageDropdown = ({ label, options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onSelectHandler = (event) => {
      if (ref.current) {
        if (ref.current.contains(event.target)) {
          setOpen((prevState) => !prevState);
          return;
        }
      }
      setOpen((prevState) => false);
    };

    document.addEventListener("click", (event) => onSelectHandler(event), {
      capture: false,
    });

    return () => {
      document.removeEventListener("click", onSelectHandler, {
        capture: true,
      });
    };
  }, []);

  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) return null;
    return (
      <div
        key={option.value}
        className="item"
        onClick={() => {
          onSelectedChange(option);
        }}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={ref} className="ui form w-3/5 ml-12">
      <div className="field">
        <h1 className=" text-white text-2xl py-4 ">{label}</h1>
        <div
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageDropdown;
