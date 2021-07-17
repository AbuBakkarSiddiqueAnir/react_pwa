import React from "react";

const VideoDescription = ({ video }) => {
  return (
    <div className="mt-12">
      <div className="text-gray-300">
        <h2 className=" p-1 text-2xl text-opacity-40 subpixel-antialiased">
          {video.snippet.title}{" "}
        </h2>
        <span className="text-lg  p-1   text-opacity-40 subpixel-antialiased">
          {video.snippet.description}
        </span>
      </div>
    </div>
  );
};

export default VideoDescription;
