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
       return console.log(e);
      }
    };

    if (searchTerm && !videos.length) {
      var timeoutIdFirstTime = setTimeout(() => {
        console.log("first search")
        onSearchSubmit();
      },500)
      
    } else if (searchTerm) {
      
      var timeoutIdOtherTimes = setTimeout(() => {
        console.log("other thatn first search")
        onSearchSubmit();
      }, 500);
    }

    return () => {
      if(timeoutIdFirstTime) clearTimeout(timeoutIdFirstTime)
       if(timeoutIdOtherTimes) clearTimeout(timeoutIdOtherTimes);
    };
  }, [searchTerm]);

  const onSelectHandler = (video) => {
    setSelected(video);
  };

  const firstSelected = (video) => {
    setSelected(video);
  };
  return (
    <div className="grid grid-cols-7 gap-4 bg-gray-800">
      <div className="col-start-1 col-end-6 bg-gray-800  m-4">
        <VideoFrame video={selected} />
      </div>
      <div className="col-start-6 col-end-8">
        <VideoList
          firstSelected={firstSelected}
          videos={videos}
          selected={selected}
          onSelectHandler={onSelectHandler}
        />
      </div>
    </div>
  );
};

export default Utube;
