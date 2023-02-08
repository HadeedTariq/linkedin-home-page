import React from 'react'
import './Home.css';
import Post from './Post';
import LinkPost from './LinkPost';
import user3 from '../../images/user-3.png'
import user4 from '../../images/user-4.png'
import postImage1 from '../../images/post-image-1.png'
import postImage2 from '../../images/post-image-2.png'
function Home() {
  return (
    <>
      <div id="home">
        <Post/>
        <LinkPost title='Clarence George' img={user3} paragraph='Founder and Ceo at Gelelio | Investor' active='2 hours ago' subTitle='The success of every website is depend on search engine optimization' postImage={postImage1}/>
        <LinkPost title='Clarence George' img={user4} paragraph='Founder and Ceo at Gelelio | Investor' active='2 hours ago' subTitle='The developer is the person which play an important role in every buisness' postImage={postImage2}/>
      </div>
    </>
  )
}

export default Home