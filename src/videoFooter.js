import React from 'react'
import "./videofooter.css"
import {Chat, ChatBubble, MusicNote, MusicNoteIcon} from "@material-ui/icons";
import Ticker from "react-ticker";

function VideoFooter() {
  return (
    <div
    className='videofooter'
    >
        <div className='footer__text'>
            <h3>@Genicist</h3> 
            <h5>Description</h5>
            <div className="footer__ticker">
                <MusicNote className='footer__icon'/>

                <Ticker mode="smooth" className="ticker">
                    {({index})=>(
                        <>
                        <p>hello this is from genics</p>
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