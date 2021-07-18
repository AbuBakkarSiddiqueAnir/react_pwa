import React from "react";

const VideoItem = ({ video, selected, onSelectHandler }) => {
  let playIcon;
  if (video.id.videoId === selected.id.videoId) {
    playIcon = (
      <span className="text-2xl text-blue-800">
        <i class="play icon "></i>
      </span>
    );
  }
  return (
    <div
      onClick={() => onSelectHandler(video)}
      className="w-80 shadow-2xl bg-gray-400 cursor-pointer"
    >
      <span className="relative">
        <span className="absolute z-50 top-36 left-2">{playIcon}</span>
        <img
          className="mt-8 p-0"
          src={video.snippet.thumbnails.medium.url}
          width={video.snippet.thumbnails.medium.width}
          height={video.snippet.thumbnails.medium.height}
        />
      </span>

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
