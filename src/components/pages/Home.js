import React from 'react'

import Intro from './Intro'
import Contact from './Contact'
import ProjectIntro from './ProjectIntro'


function Home() {
  return (
    <div className='home'>
        <Intro />
        <ProjectIntro />
        <Contact />
    </div>
  )
}

export default Home