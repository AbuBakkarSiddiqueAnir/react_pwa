import React from "react";

const VideoItem = ({ video, selected, onSelectHandler }) => {
  let playIcon;
  if(selected && video){
    if (video.id.videoId === selected.id.videoId) {
      playIcon = (
        <span className="text-3xl text-blue-800">
          <i class="play icon "></i>
        </span>
      );
    }
  }
 
  return (
    <div
      onClick={() => onSelectHandler(video)}
      className="m-w-7xl shadow-2xl mr-4 bg-gray-800 cursor-pointer"
    >
      <span className="relative">
        <span className="absolute z-50 top-36 left-1">{playIcon}</span>
        <img
          loading="lazy"
          className="mt-8 p-0"
          src={video.snippet.thumbnails.medium.url}
          width={video.snippet.thumbnails.medium.width}
          height={video.snippet.thumbnails.medium.height}
        />
      </span>

      <h2 className="text-xl  text-gray-300 p-1 text-center">
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
