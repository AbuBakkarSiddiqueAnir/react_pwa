import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import UtubeApi from "./Api/UtubeApi";
import VideoFrame from "./VideoDeatails/VideoFrame";
import VideoList from "./VideoList";

const Utube = ({ searchTerm, searchTermReset }) => {
  const [videos, setVideos] = useState([]);
  const [selected, setSelected] = useState(null);
  const route = useLocation();

  useEffect(() => {
    searchTermReset(route.pathname);
  }, []);

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
        onSearchSubmit();
      }, 500);
    } else if (searchTerm) {
      var timeoutIdOtherTimes = setTimeout(() => {
        onSearchSubmit();
      }, 500);
    }

    return () => {
      if (timeoutIdFirstTime) clearTimeout(timeoutIdFirstTime);
      if (timeoutIdOtherTimes) clearTimeout(timeoutIdOtherTimes);
    };
  }, [searchTerm]);

  const onSelectHandler = (video) => {
    setSelected(video);
  };

  const firstSelected = (video) => {
    setSelected(video);
  };

  const emptyPage = (
    <div className="text-8xl ml-80 mt-12">
      {" "}
      <br />
      <i class="youtube icon "> </i> <span>Youtube</span>
    </div>
  );

  return videos.length !== 0 ? (
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
  ) : (
    emptyPage
  );
};

export default Utube;
