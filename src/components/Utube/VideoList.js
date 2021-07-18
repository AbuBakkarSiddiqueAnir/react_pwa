import React,{useEffect} from 'react';
import VideoItem from './VideoItem'

const VideoList = ({videos, selected, onSelectHandler, firstSelected}) => {
    
    useEffect(() => {
        firstSelected(videos[0])
    },[videos])
    
    const videoList = videos.map((video) => {
        return <VideoItem key={video.id.videoId} selected={selected} onSelectHandler={onSelectHandler} video={video}/>
    } )

    return (
        <div>
          {videoList}
        </div>
    )
}



export default VideoList;