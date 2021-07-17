import React, { useState, useEffect } from "react";
import UtubeApi from "./Api/UtubeApi";
import VideoFrame from "./VideoDeatails/VideoFrame";
import VideoList from "./VideoList";

const Utube = ({ searchTerm }) => {
  const [videos, setVideos] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const onSearchSubmit = async () => {
      try {
        const { data } = await UtubeApi.get("/search", {
          params: {
            q: searchTerm,
          },
        });

        setVideos(data.items);
      } catch (e) {
        console.log(e);
      }
    };

    if (searchTerm && !videos.length) {
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

  const onSelectHandler = (video) => {
    setSelected(video);
  };

  return (
    <div className="grid grid-cols-7 gap-4 bg-gray-800">
      <div className="col-start-1 col-end-6 bg-gray-800  m-4">
        <VideoFrame video={selected} />
      </div>
      <div className="col-start-6 col-end-8">
        <VideoList videos={videos} onSelectHandler={onSelectHandler} />
      </div>
    </div>
  );
};

export default Utube;
