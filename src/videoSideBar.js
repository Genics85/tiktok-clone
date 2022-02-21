import { Chat, Favorite, FavoriteBorder, Share } from '@material-ui/icons'
import React, { useState } from 'react'
import "./videoSideBar.css"

function VideoSideBar({likes,comments,shares}) {

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
          
          <p> {liked?likes + 1:likes} 
          </p>
        </div>
        <div className='sidebar__option'>
          <Chat fontSize="large" />
          <p>{comments}</p>
        </div>
        <div className='sidebar__option'>
          <Share fontSize="large" />
          <p>{shares}</p>
        </div>

    </div>
  )
}

export default VideoSideBar