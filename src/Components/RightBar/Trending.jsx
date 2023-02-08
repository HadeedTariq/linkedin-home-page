import React from 'react'
import './Rightbar.css'
import more from '../../images/more.png'
function Trending() {
  return (
    <>
      <div className="trending">
        <div className="news">
            <h1>Trending News</h1>
            <img src={more} alt="" />
        </div>
        <div className="trend">
            <div className="trending-news">
                <h3>High demand for skill man power</h3>
                <p>1d ago.10,934 readers </p>
            </div>
            <div className="trending-news">
                <h3>Careers growing horizontally to</h3>
                <p>1d ago.8,634 readers </p>
            </div>
            <div className="trending-news">
                <h3>Google fire its 11000 employ</h3>
                <p>1d ago.6,984 readers </p>
            </div>
            <div className="trending-news">
                <h3>More hiring = higher confidence?</h3>
                <p>1d ago.6,586 readers </p>
            </div>
            <div className="trending-news">
                <h3>Gautam become world richest man</h3>
                <p>1d ago.7,928 readers </p>
            </div>
        </div>
      </div>
    </>
  )
}

export default Trending