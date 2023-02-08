import React from 'react'
import './LeftBar.css'
import recent from '../../images/recent.png'
import group from '../../images/group.png'
import hashtag from '../../images/hashtag.png'
function Recent() {
  return (
    <>
      <div id="recent">
        <div className="recent">
            <h1>Recent</h1>
            <div className="skills">
                <img src={recent} alt="" />
                <p>Web Development</p>
            </div>
            <div className="skills">
                <img src={recent} alt="" />
                <p>User Interface</p>
            </div>
            <div className="skills">
                <img src={recent} alt="" />
                <p>Online Learning</p>
            </div>
            <div className="skills">
                <img src={recent} alt="" />
                <p>Learn Online</p>
            </div>
            <div className="skills">
                <img src={recent} alt="" />
                <p>Code Better</p>
            </div>
        </div>
        <div className="group recent"> 
          <h1>Groups</h1>
          <div className="skills">
            <img src={group} alt="" />
            <p>Web Design Group</p>
          </div>
          <div className="skills">
            <img src={group} alt="" />
            <p>Html & Css Learner</p>
          </div>
          <div className="skills">
            <img src={group} alt="" />
            <p>React & JavaScript Group</p>
          </div>
          <div className="skills">
            <img src={group} alt="" />
            <p>Learn Coding Online</p>
          </div>
        </div>
        <div className="hashtag recent">
            <h1>HashTag</h1>
            <div className="skills">
                <img src={hashtag} alt="" />
                <p>webdevelopment</p>
            </div>
            <div className="skills">
                <img src={hashtag} alt="" />
                <p>userinterface</p>
            </div>
            <div className="skills">
                <img src={hashtag} alt="" />
                <p>react</p>
            </div>
        </div>
        <h4>Discover More</h4>
      </div>
    </>
  )
}

export default Recent