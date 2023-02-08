import React from 'react'
import './Rightbar.css'
import user1 from '../../images/user-1.png'
import mi from '../../images/mi-logo.png'
function Principle() {
  return (
   <>
      <div className="principle">
         <h4>Master the 5 principle of web design</h4>
         <div className="img">
            <img src={user1} alt="" />
            <img src={mi} alt="" />
         </div>
         <h4>Broad and Demand in Xiaomi</h4>
      </div>
   </>
  )
}

export default Principle