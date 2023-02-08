import React from 'react'
import "./LeftBar.css"
import ProfileData from './ProfileData'
import Recent from './Recent'
function LeftBar() {
  return (
    <>
      <div className="left">
        <div id="left-bar">
          <ProfileData />
          <Recent />
        </div>
      </div>
    </>
  )
}

export default LeftBar