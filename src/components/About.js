import React from 'react'
import Common from './Common';
import robot from '../images/robot.jpg';
function Home() {
  return (
    <>
      <Common name="Welcome To About Page" img={robot} link="/contact" btn="Contact Now"/>
    </>
  )
}

export default Home