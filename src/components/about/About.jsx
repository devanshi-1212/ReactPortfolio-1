import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Undergraduate Student</h5>
              <h5>(2021-Present)</h5>
              <small>LNM Institute of Information Technology,
Jaipur</small>
              <br/>
              <small><em><b>Current GPA: 7.21/10 (till semester 4)</b></em></small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Class 12th</h5>
              <h5>(2021)</h5>
              <small>RSM International School, Jodhpur</small>
              <br/>
              <small><em><b>Overall Percentage: 85.8%</b></em></small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Class 10th</h5>
              <h5>(2019)</h5>
              <small>Delhi Public School, Jodhpur</small>
              <br/>
              <small><em><b>Overall Percentage: 96.2%</b></em></small>
            </article>
          </div>

          <p>
          I am a 3rd year Computer and Communication Engineering student. With a passion for problem-solving and technology, I am continually
          seeking opportunities to expand my knowledge and skills in the field. My academic journey has equipped me with a solid foundation in
          programming languages like C++, data structures and algorithms. I am particularly interested in exploring the realms of AI, ML and
          software development.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About