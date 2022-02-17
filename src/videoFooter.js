import React from 'react'
import "./videofooter.css"

function VideoFooter() {
  return (
    <div
    className='videofooter'
    >
        <div className='footer__text'>
            <h3>@Genicist</h3> 
            <h5>Description</h5>
        </div>
        
        <img 
            className='footer__image'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzkE5MYBMroeHOkynCzljWhjvPG6e7-gs9wQ&usqp=CAU'
             alt=''
        />
            
        
        
    </div>
  )
}

export default VideoFooter