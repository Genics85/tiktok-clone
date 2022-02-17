import { Chat, Favorite, FavoriteBorder, Share } from '@material-ui/icons'
import React, { useState } from 'react'
import "./videoSideBar.css"

function VideoSideBar() {

  const [liked, setliked] = useState(false);

  return (
    <div className="sidebar">
        <div className='sidebar__option'>
          {liked?
          (
            <Favorite
            onClick={(e)=>(
              setliked(false)
            )}
            fontSize="large"
            />
          ):(
            <FavoriteBorder
            onClick={(e)=>(
              setliked(true)
            )}
            fontSize="large"
            />
            
          )}
          
          <p> {liked?300:299} 
          </p>
        </div>
        <div className='sidebar__option'>
          <Chat fontSize="large" />
          <p>50</p>
        </div>
        <div className='sidebar__option'>
          <Share fontSize="large" />
          <p>20</p>
        </div>

    </div>
  )
}

export default VideoSideBar