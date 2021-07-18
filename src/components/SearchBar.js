import React, { useEffect, useRef } from "react";

const SearchBar = ({ searchTermHandler }) => {
  const inputSearchField = useRef();
  useEffect(() => {
    inputSearchField.current.focus();
  });

  return (
    <div className="fixed top-4 left-48 z-50">
      <div className="ui action input">
        <input
          ref={inputSearchField}
          className="w-80"
          onChange={(e) => searchTermHandler(e.target.value)}
          type="text"
          placeholder="Search..."
        />
        <button className="ui button">Search</button>
      </div>
    </div>
  );
};

export default SearchBar;
