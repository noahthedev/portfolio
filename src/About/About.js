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
              As a former beverage director, I've developed a skill set focused around creative problem solving, thrifty resource management, and facilitating an environment of hospitality for my clients and coworkers alike.
            </p>
            <p>
              As a startup veteran, I relish the opportunity to roll up my sleeves and jump headfirst into a new challenge. In my past, that meant the research & development of novel <a href='https://www.chicagodistilling.com/canned-cocktails' target='_blank' rel='noreferrer'>canned cocktails</a>; a project with a scope ranging from formulation, to process & manufacturing, all the way through to compliance and marketing.
            </p>
            <p>
              My desire to work with emerging technology brought me to Thinkful, where I've recently completed their fullstack web development bootcamp. I've found the task of agile development to utilize my acquired expertise while challenging me to continually educate myself on new technologies and tools that enable me to become a more efficient problem solver. As I begin my career in software engineering, I'm anxious to join a team that is similarly passionate about creating outstanding experiences for clients.
            </p>
            <div className='resume-wrapper'>
              <a href='https://docs.google.com/document/d/1ZdTNgPmC1MSaU_HXTOBWHfwqzIhgM68K_RK25PTOYJc/edit?usp=sharing' target='_blank' rel='noreferrer'className='resume'>Resume</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}