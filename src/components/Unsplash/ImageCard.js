import React, { useRef, useState, useEffect } from "react";
import "./ImageList.css";

const ImageCard = ({ src, alt }) => {
  const [spans, setSpans] = useState(0);
  const imageRef = useRef();

  useEffect(() => {
    imageRef.current.addEventListener("load", setGridSpans);
  }, [spans]);

  const setGridSpans = () => {
    if (imageRef.current) {
      const height = imageRef.current.clientHeight;
      const span = Math.ceil(height / 10);
      setSpans({ spans: span });
    }
  };

  return (
    <div style={{ display: "grid", gridRowEnd: `span ${spans.spans}` }}>
      <img ref={imageRef} alt={alt} src={src} />
    </div>
  );
};

export default ImageCard;
