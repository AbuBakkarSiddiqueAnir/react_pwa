import React from "react";
import VideoDescription from "./VideoDescription";

const VideoFrame = ({ video }) => {
  if (!video) return "loading";
  console.log(video);

  let videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div className=" ui">
      <div className="embed ui">
        <iframe src={videoSrc} />
      </div>
      <div className="ui header">
        <VideoDescription video={video} />
      </div>
    </div>
  );
};

export default VideoFrame;
