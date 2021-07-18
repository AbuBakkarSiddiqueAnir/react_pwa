import React from "react";
import VideoDescription from "./VideoDescription";

const VideoFrame = ({ video }) => {
  if (!video) return (
    <div>
      <h1 className="text-4xl text-white py-8">Search video from the search box</h1>
    </div>
  )

  let videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div className=" ui">
      <div className="embed ui">
        <iframe allowfullscreen  src={videoSrc} />
      </div>
      <div className="ui header">
        <VideoDescription video={video} />
      </div>
    </div>
  );
};

export default VideoFrame;
