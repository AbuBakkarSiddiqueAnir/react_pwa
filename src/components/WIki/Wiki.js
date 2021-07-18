import React, { useState, useEffect } from "react";
import {
  useLocation,
} from "react-router-dom";
import WikiApi from "./Api/WikiApi";

const Wiki = ({ searchTerm,searchTermReset }) => {
  const [apiData, setApiData] = useState([]);

  const route = useLocation()
  
  useEffect(() => {
    searchTermReset(route.pathname)
  },[])

  useEffect(() => {
    const ApiSearchData = async () => {
      const { data } = await WikiApi(searchTerm);
      setApiData(data.query.search);
    };

    if (searchTerm && !apiData.length) {
      var timeoutIdFirstTime = setTimeout(() => {
        ApiSearchData();
      },400)
      
    } else if (searchTerm) {
      
      var timeoutIdOtherTimes = setTimeout(() => {
        ApiSearchData();
      }, 400);
    }

    return () => {
      if(timeoutIdFirstTime) clearTimeout(timeoutIdFirstTime)
       if(timeoutIdOtherTimes) clearTimeout(timeoutIdOtherTimes);
    };
  }, [searchTerm]);

  const renderedData = apiData.map((data) => {
    return (
      <div className="w-100 shadow-2xl h-auto bg-green-600 text-white p-4 border-b-8">
        <h1 className="font-bold">
          <a
            href={`https://en.wikipedia.org?curid=${data.pageid}`}
            target="_blank"
            className="text-2xl"
          >
            {data.title}
          </a>
        </h1>

        <span className="text-xl" dangerouslySetInnerHTML={{ __html: data.snippet }}></span>
      </div>
    );
  });

  return (
    <div className="">
      <div className="grid  items-center justify-center bg-gray-200 h-16 m-8">
        <div>{renderedData}</div>
      </div>
    </div>
  );
};

export default Wiki;
