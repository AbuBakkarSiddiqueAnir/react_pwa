import React, { useState, useEffect } from "react";
import UnsplashApi from "./Api/UnsplashApi";
import ImageList from "./ImageList";

const Unsplash = ({ searchTerm }) => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    const onSearchSubmit = async () => {
      try {
        const unsplashData = await UnsplashApi.get("/search/photos", {
          params: { query: searchTerm },
        });
        setImages(unsplashData.data.results);
        console.log(unsplashData.data.results);
      } catch (e) {
        console.log(e);
      }
    };

    if (searchTerm && !images.length) {
      onSearchSubmit();
    } else {
      var timeoutId = setTimeout(() => {
        if (searchTerm) {
          onSearchSubmit();
        }
      }, 500);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [searchTerm]);

  return (
    <div className="ui container bg-gray-800 p-4" style={{ marginTop: "10px" }}>
      <ImageList images={images} />
    </div>
  );
};

export default Unsplash;
