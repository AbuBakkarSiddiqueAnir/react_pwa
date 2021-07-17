import React from 'react';
import VideoItem from './VideoItem'

const VideoList = ({videos, onSelectHandler}) => {

    const videoList = videos.map((video) => {
        return <VideoItem onSelectHandler={onSelectHandler} video={video}/>
    } )


    return (
        <div>
          {videoList}
        </div>
    )
}



export default VideoList;