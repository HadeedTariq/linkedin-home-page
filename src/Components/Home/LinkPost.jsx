import React from 'react'
import './Home.css'
import like from '../../images/like.png'
import comment from '../../images/comment.png'
import share from '../../images/share.png'
import send from '../../images/send.png'
import love from '../../images/love.png'
import clap from '../../images/clap.png'
function LinkPost(props) {
  return (
    <>
      <div id="link-post">
        <div className="user">
            <img src={props.img} alt="" />
        <div className="title">
            <h2>{props.title}</h2>
            <p>{props.paragraph}</p>
            <p>{props.active}</p>
         </div>
        </div>
        <div className="post">
            <p>{props.subTitle}</p>
            <img src={props.postImage} alt="" />
        </div>
        <div className="impression">
            <div className="likes">
                <img src={like} alt="" />
                <img src={love} alt="" />
                <img src={clap} alt="" />
                <p>Elon Musk and 75 others</p>
            </div>
            <div className="comments">
                <p>22 comments</p>
                <p>40 shares</p>
            </div>
        </div>
        <div className="impression-box">
            <img src={like} alt="" />
            <img src={comment} alt="" />
            <img src={share} alt="" />
            <img src={send} alt="" />
        </div>
      </div>
    </>
  )
}

export default LinkPost