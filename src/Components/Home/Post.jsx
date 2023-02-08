import React from 'react'
import Home from './Home.css'
import user from '../../images/user-1.png'
import video from '../../images/video.png'
import photo from '../../images/photo.png'
import event from '../../images/event.png'
function Post() {
  return (
    <>
      <div id="post">
        <div className="write">
            <img src={user} alt="" />
            <h4>Write Post</h4>
        </div>
        <div className="icons">
            <div className="icon">
            <img src={photo} alt="" />
            <p>Photo</p>
            </div>
            <div className="icon">
                <img src={video} alt="" />
                <p>Video</p>
            </div>
            <div className="icon">
                <img src={event} alt="" />
                <p>Event</p>
            </div>
            <div className="icon1">
                <h3>Post</h3>
            </div>
            
            
        </div>
      </div>
    </>
  )
}

export default Post