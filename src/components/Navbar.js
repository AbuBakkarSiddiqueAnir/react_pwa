import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ showHandler, show }) => {
  return (
    <div className="bg-gray-800 fixed  text-white w-40 h-screen flex items-center flex-col font-serif">
      <div className="mt-4">
        <button
          className="ui secondary h-12  w-40 hover:bg-gray-900"
          onClick={() => showHandler(!show)}
        >
          <i className="search icon "></i>
        </button>
        {/* {show ? <div className="fixed top-4 left-48 z-10">
          <SearchBar searchTermHandler={searchTermHandler}/>
        </div> : null} */}
      </div>

      <ul className="mt-36">
        <li className="mt-8 pl-4 pt-3 cursor-pointer w-40 h-12   hover:bg-gray-900">
          <NavLink activeClassName="text-green-600" to="./" exact>
            <i class="home icon "></i>
            <span className="pl-4">Home</span>
          </NavLink>
        </li>

        <li className="mt-8 pl-4 pt-3 cursor-pointer w-40 h-12  hover:bg-gray-900">
          <NavLink activeClassName="text-green-600" to="./wikipedia">
            <i class="wikipedia w icon "></i>
            <span className="pl-4">Wikipedia</span>
          </NavLink>
        </li>

        <li className="mt-8 pl-4 pt-3 cursor-pointer w-40 h-12   hover:bg-gray-900">
          <NavLink activeClassName="text-green-600" to="./image">
            <i class="image icon "></i>
            <span className="pl-4">Image</span>
          </NavLink>
        </li>

        <li className="mt-8 pl-4 pt-3 cursor-pointer w-40 h-12  hover:bg-gray-900">
          <NavLink activeClassName="text-green-600" to="./utube">
            <i class="youtube icon "></i>
            <span className="pl-4">Utube</span>
          </NavLink>
        </li>

        <li className="mt-8 pl-4 pt-3 cursor-pointer w-40 h-12   hover:bg-gray-900">
          <NavLink activeClassName="text-green-600" to="./translator">
            <i class="exchange icon "></i>
            <span className="pl-4">Translator</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
