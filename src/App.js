import { useEffect, useState } from 'react';
import React from 'react';
import './App.css';
import db from './firebaseConfig';
import Video from './video';


function App() {

// const [Videos, setVideos] = useState([]);

// useEffect(() => {
//   db.collections("videos").onSnapshot(snapshot=>
//     setVideos([
//       snapshot.docs.map(doc=> doc.data)
//     ]))
// }, [Videos])

  return (
    <div className="app">
      <div className='app__videos'>

        {/* {Videos.map(
          ({caption,likes,url,comments,shares,handle,title})=>
          <Video
          likes={likes}
          url={url}
          caption={caption}
          comments={comments}
          shares={shares}
          handle={handle}
          title={title}
          />
          )
      } */}

      <Video
      caption={"this song is nice"}
      handle={"Genics"}
      title={"sarkodie and shatta"}
      likes={200}
      shares={20}
      comments={1}
      url={"https://v16-webapp.tiktok.com/fdc111a448077009e3539c66c6f74bf3/6213d743/video/tos/useast2a/tos-useast2a-ve-0068c002/f268c342da7c4dc4916e8b97c90753d1/?a=1988&br=2348&bt=1174&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3ydnz7Thg2x9DXq&l=202202211217230102230991402502239E&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=and0eTw6ZjNwOzMzNzczM0ApN2Q8M2k0NDw4NzhpNGhlaWdkY3M2cjRfZjRgLS1kMTZzczY0YmE0YzQzLy82MC0yMDI6Yw%3D%3D&vl=&vr="}
      />
        </div>
    </div>
  );
}

export default App;
