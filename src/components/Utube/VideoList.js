import React,{useEffect} from 'react';
import VideoItem from './VideoItem'

const VideoList = ({videos, onSelectHandler, firstSelected}) => {
    
    useEffect(() => {
        firstSelected(videos[4])
    },[])
    
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