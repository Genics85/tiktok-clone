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
        src='https://v16-webapp.tiktok.com/3ee1155725f1ba71bd580d2656344dce/620dcbb2/video/tos/useast2a/tos-useast2a-pve-0068/e554078146c9413984f6d77b8e55f73f/?a=1988&br=4768&bt=2384&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3ydnz7ThSTPEDXq&l=20220216221430010192163163197C9AEF&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=Mztkbzc6ZjtvOzMzNzczM0ApaGlnZmgzNzs7N2dkZ2RpaWdkZzFecjRnbTFgLS1kMTZzc2JjLTYxYDQzLzAwMTY0YWI6Yw%3D%3D&vl=&vr='>

        </video>
        
        <VideoFooter/>
    </div>
  )
}

export default Video