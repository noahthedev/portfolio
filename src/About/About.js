import React from 'react'
import './About.css'
import bust from '../images/bust.jpg'

export default class About extends React.Component  {

  render() {
    return (
      <div className="About">
        <h3>About Me</h3>
        <div className='about-me'>
          <div className='photo-wrapper'>
          <img src={bust} alt='man in a black suit' />
          </div>
          <div className='text-wrapper'>
            <p>
              As a former beverage director, I've developed a skillset focused around creative problem solving, thrifty resource management, and facilitating an environment of hospitality for my clients and coworkers alike.
            </p>
            <p>
              My desire to work with emerging technology brought me to Thinkful, where I'm currently a student in their web development program. Upon graduation, I will be fluent in JS, HTML, and CSS as well as competent in server-side programming. As I expand my knowledge base and experience, I plan to transition to work in UI/UX design. I look forward to a career where I can be a lifelong student and coloborate with similarly passionate individuals and teams.
            </p>
          </div>
        </div>
      </div>
    )
  }
}