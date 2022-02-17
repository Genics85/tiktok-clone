import React from 'react'
import "./videofooter.css"
import {Chat, ChatBubble, MusicNote, MusicNoteIcon} from "@material-ui/icons";
import Ticker from "react-ticker";

function VideoFooter({handle,caption,title}) {
  return (
    <div
    className='videofooter'
    >
        <div className='footer__text'>
            <h3>@{handle}</h3> 
            <h5>{caption}</h5>
            <div className="footer__ticker">
                <MusicNote className='footer__icon'/>

                <Ticker mode="smooth" className="ticker">
                    {({index})=>(
                        <>
                        <p> {title} </p>
                        </>
                    )}

                </Ticker>

            </div>

            
        </div>
        
        <img 
            className='footer__image'
            src='https://image.pngaaa.com/178/1590178-small.png'
             alt=''
        />
            
        
        
    </div>
  )
}

export default VideoFooter