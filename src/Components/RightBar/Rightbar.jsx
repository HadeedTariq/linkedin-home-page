import React from 'react'
import './Rightbar.css'
import Trending from './Trending'
import Principle from './Principle'
function Rightbar() {
  return (
    <>
    <div className="right">
      <div id="right-bar">
        <Trending/>
        <Principle/>
      </div>
      </div>
    </>
  )
}

export default Rightbar