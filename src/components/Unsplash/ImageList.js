import React from "react";
import "./ImageList.css";
import ImageCard from "./ImageCard";

const ImageList = ({ images }) => {
  const renderedImages = images.map((image) => {
    return (
      <ImageCard
        src={image.urls.small}
        key={image.id}
        alt={image.alt_description}
      />
    );
  });
  return <div className="image-list">{renderedImages}</div>;
};

export default ImageList;
