import React, { useRef, useState } from 'react'
import "./video.css"
import VideoFooter from './videoFooter';
import VideoSideBar from './videoSideBar';

function Video({url,likes,shares,comments,handle,caption,title}) {
  const videoRef=useRef(null);
  const [playing,setPlaying]=useState(false);

  const onVideoPressed=()=>{
    if(playing){
      videoRef.current.pause();
      setPlaying(false);
    }else{
      videoRef.current.play();
      setPlaying(true);
    }
    
  }

  return (
    <div className='video'>
        <video 
        className="video__player" 
        ref={videoRef}
        onClick={onVideoPressed}
        loop
        src={url}
        >

        </video>
        <VideoFooter
          handle={handle}
          caption={caption}
          title={title}
        />
        <VideoSideBar
          likes={likes}
          comments={comments}
          shares={shares}
        />

        
    </div>
  )
}

export default Video