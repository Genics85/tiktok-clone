import React, { useRef, useState } from 'react'
import "./video.css"
import VideoFooter from './videoFooter';

function Video() {
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
        src='https://v16-webapp.tiktok.com/47f0c6590d1303d2e102c9b5157dd0f6/620ec7ff/video/tos/useast2a/tos-useast2a-ve-0068c004/79cb7b58c64b438384f842f9e3b12898/?a=1988&br=4720&bt=2360&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3ydnz7ThReCEDXq&l=202202171610070101902092291E3786E2&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2k6bWk6ZmpnOzMzNzczM0ApZzg4M2U2NmU3NztoZ2ZpZmdmXmFlcjQwMS5gLS1kMTZzczYtL2JhMmMxXzU0L19eXl46Yw%3D%3D&vl=&vr='
        >

        </video>
        
        <VideoFooter/>
    </div>
  )
}

export default Video