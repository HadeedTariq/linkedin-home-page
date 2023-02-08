import React from 'react'
import CoverPic from '../../images/cover-pic.png'
import user1 from '../../images/user-1.png'
import item from '../../images/items.png'
import premium from '../../images/premium.png'
function ProfileData() {
  return (
    <>
      <div className="profile-data">
        <img id='cover-pic' src={CoverPic} alt="" />
        <img id='user-1' src={user1} alt="" />
        <div className="details">
            <h1>Hadeed Tariq</h1>
            <h3>Junior Web Developer</h3>
           <div className="data-content">
            <div className="views">
                <p>Your Profile Views</p>
                <p style={{color:"blueviolet"}}>810</p>
            </div>
            <div className="views">
                <p>Your Post Views</p>
                <p style={{color:"blueviolet"}}>52</p>
            </div>
            <div className="views">
                <p>Your Connection</p>
                <p style={{color:"blueviolet"}}>205</p>
            </div>
            </div>
            <div className="items">
                <div className="my-item">
                    <img src={item} alt="" />
                    <p>My Items</p>
                </div>
                <div className="my-item">
                    <img src={premium} alt="" />
                    <p>Try Premium</p>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default ProfileData