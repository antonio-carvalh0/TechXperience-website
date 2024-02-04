import React from 'react'
import './about.css'
import tech_img from '../../assets/tech.png'
const About = () => {

  const [isImgActive, setIsImgActive] = React.useState(true)

  const handleClick = () => {
    setIsImgActive(!isImgActive)
  }

  return (
    <div className='about container' id='about'>
      <div className="left">
        <h1 className='a'>TechXperience 2024</h1>
        <h1 className='date'>Date:</h1>
        <h1 className='b'>June 15-17, 2024</h1>
        <h1 className='venue'>Venue:</h1>
        <h1 className='c'>City Convention Center, TechCity</h1>
        <button onClick={handleClick}>About us</button>
      </div>

      <div className="right">
        <div>
          { isImgActive? <img src={tech_img} className='img'/> :
           <p className='p'>TechXperience 2024 is a premier technology conference bringing together innovators, entrepreneurs, and tech enthusiasts from around the world. Explore the latest trends, attend insightful sessions, and network with industry leaders. Don't miss this opportunity to immerse yourself in the future of technology.</p>
          }
        </div>        
      </div>
    </div>
  )
}

export default About