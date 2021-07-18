import React, { useState, useEffect } from "react";
import {
  useLocation,
} from "react-router-dom";
import UnsplashApi from "./Api/UnsplashApi";
import ImageList from "./ImageList";


const Unsplash = ({ searchTerm,searchTermReset }) => {
  const [images, setImages] = useState([]);

  const route = useLocation()
  
  useEffect(() => {
    searchTermReset(route.pathname)
  },[])

  useEffect(() => {
    const onSearchSubmit = async () => {
      try {
        const unsplashData = await UnsplashApi.get("/search/photos", {
          params: { query: searchTerm },
        });
        setImages(unsplashData.data.results);
      } catch (e) {
        console.log(e);
      }
    };

    if (searchTerm && !images.length) {
      var timeoutIdFirstTime = setTimeout(() => {
        onSearchSubmit();
      },300)
      
    } else if (searchTerm) {
      
      var timeoutIdOtherTimes = setTimeout(() => {
        onSearchSubmit();
      }, 300);
    }

    return () => {
      if(timeoutIdFirstTime) clearTimeout(timeoutIdFirstTime)
       if(timeoutIdOtherTimes) clearTimeout(timeoutIdOtherTimes);
    };
  }, [searchTerm]);

  return (
    <div className="ui container bg-gray-800 p-4" style={{ marginTop: "10px" }}>
      <ImageList images={images} />
    </div>
  );
};

export default Unsplash;
