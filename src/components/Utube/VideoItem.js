import React from "react";

const VideoItem = ({ video, onSelectHandler }) => {
  return (
    <div
      onClick={() => onSelectHandler(video)}
      className="w-80 shadow-2xl bg-gray-400 cursor-pointer"
    >
      <img
        className="mt-8 p-0"
        src={video.snippet.thumbnails.medium.url}
        width={video.snippet.thumbnails.medium.width}
        height={video.snippet.thumbnails.medium.height}
      />
      <h2 className="text-xl p-1 text-center text-opacity-40 subpixel-antialiased">
        {video.snippet.title}{" "}
        <span className="font-bold">
          {" "}
          (Channel : {video.snippet.channelTitle})
        </span>{" "}
      </h2>
    </div>
  );
};

export default VideoItem;
