import React,{useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, SH } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar";
import NavTitle from "./components/NavTitle";
import Home from "./components/Home/Home";
import Wiki from "./components/WIki/Wiki";
import Unsplash from "./components/Unsplash/Unsplash";
import Translator from "./components/Translator/Translator";


function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const searchTermHandler = (inputValue) => {
    setSearchTerm(inputValue);
  }

  return (
    <Router>
      <div className="relative">
        <Navbar searchTermHandler={searchTermHandler}/>
        <div className="ml-40 bg-gray-200 w-screen h-screen absolute w-3/4 top-0 pt-20 pl-8 pr-60">
          {/* <Wiki searchTerm={searchTerm}/> */}
           <Translator />
        </div>

      </div>
    </Router>
    
  
  )
}

export default App;
