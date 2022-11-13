import React from 'react'
import Posts from '../../compopnents/posts/Posts'

import Stories from '../../compopnents/stories/Stories'
import "./home.scss"

const Home = () => {
  return (
    <div className='home'>
      <Stories/>
      <Posts/>
    </div>
  )
}

export default Home
