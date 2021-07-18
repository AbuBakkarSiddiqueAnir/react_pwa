import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import NavTitle from "./components/NavTitle";
import SearchBar from "./components/SearchBar";
import Home from "./components/Home/Home";
import Wiki from "./components/WIki/Wiki";
import Unsplash from "./components/Unsplash/Unsplash";
import Translator from "./components/Translator/Translator";
import Utube from "./components/Utube/Utube";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [show, setShow] = useState(false);
  const [path, setPath] = useState("/");

  const showHandler = (term) => {
    setShow(term);
  };

  const searchTermHandler = (inputValue) => {
    setSearchTerm(inputValue);
  };

  const searchTermReset = (path) => {
    setPath(path);
  };

  useEffect(() => {
    setSearchTerm("");
  }, [path]);

  return (
    <Router>
      <div>
        <div className="relative">
          {show ? <SearchBar searchTermHandler={searchTermHandler} /> : null}
          <NavTitle />
        </div>
        <Navbar showHandler={showHandler} show={show} />
        <div className="ml-40 bg-gray-200 w-screen min-h-screen absolute w-3/4 top-0 pt-20 pl-8 pr-60">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/wikipedia" exact>
              <Wiki searchTermReset={searchTermReset} searchTerm={searchTerm} />
            </Route>
            <Route path="/image" exact>
              <Unsplash
                searchTermReset={searchTermReset}
                searchTerm={searchTerm}
              />
            </Route>
            <Route path="/utube" exact>
              <Utube
                searchTermReset={searchTermReset}
                searchTerm={searchTerm}
              />
            </Route>
            <Route path="/translator" exact>
              <Translator />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
