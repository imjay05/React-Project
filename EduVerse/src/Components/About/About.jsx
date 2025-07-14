import React from 'react'
import './About.css'
import about_img from '../../assets/eduverse_assets/about.png'
import play_icon from '../../assets/eduverse_assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div>
      <div className="about" id='about'>
        <div className="about-left">
          <img src={about_img} alt=""  className='about-img'/>
          <img src={play_icon} alt=""  className='play-icon' onClick={() =>{setPlayState(true)}}/>
        </div>
        <div className="about-right">
          <h3>ABOUT UNIVERSITY</h3>
          <h2>Nurturing Tomorrow's Leaders Today</h2>
          <p>
          Our university stands at the forefront of academic excellence, innovation, and holistic development. With a legacy of empowering minds through quality education, we provide an environment where students are encouraged to explore their potential, think critically, and push boundaries. From world-class faculty to modern infrastructure, every element is designed to support your journey toward success.
          </p>

          <p>
          We believe that true leadership stems from both knowledge and character. Through a blend of rigorous academics, hands-on learning, and value-based education, we aim to shape individuals who are not just career-ready, but also responsible citizens. Our diverse student community and global partnerships offer a rich learning experience beyond the classroom.
          </p>

         <p>
         As we nurture tomorrow’s leaders today, our focus remains on fostering innovation, collaboration, and a spirit of service. Whether it’s through cutting-edge research, entrepreneurship programs, or community engagement initiatives, we ensure every student is prepared to make a meaningful impact in the world. Join us and become part of a future that you help lead.
         </p>
        </div>
      </div>
    </div>
  )
}

export default About
