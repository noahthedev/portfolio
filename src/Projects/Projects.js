import React from 'react'
import './Projects.css'
import ApiIpa from '../images/apiipa.png'
import Tricolate from '../images/brewwithtricolate.png'
import TableText from '../images/tabletext.png'

export default class Projects extends React.Component  {

  render() {
    return (
      <div className="Projects">
        <h3>Projects</h3>
        <div className='project-container'>
          <div className='img-wrapper'>
            <img src={TableText} alt='a sms-enabled restaurant waiting list app'/>
          </div>
          <div className='text-wrapper'>
            <h4>TableText</h4>
            <p>
              TableText is a waiting list app that allows restaurants to send an SMS to the guest when their table is ready.
            </p>
            <div className='link-container'>
              <a href='https://tabletext.vercel.app/' target='_blank' rel='noreferrer'className='live'>See Live</a>
              <a href='https://github.com/noahthedev/tabletext-client' target='_blank' rel='noreferrer' className='source'>Source Code</a>
            </div>
          </div>
        </div>
        <div className='project-container'>
          <div className='img-wrapper'>
            <img src={Tricolate} alt='a recipe finder for the Tricolate brewer'/>
          </div>
          <div className='text-wrapper'>
            <h4>Brew with Tricolate</h4>
            <p>
              Brew With Tricolate is a web app designed to help coffee enthusiasts discover and share recipes for the Tricolate, a revolutionary pourover brewer. 
            </p>
            <div className='link-container'>
              <a href='https://www.brewwithtricolate.com/' target='_blank' rel='noreferrer'className='live'>See Live</a>
              <a href='https://github.com/noahthedev/tricolate-client' target='_blank' rel='noreferrer' className='source'>Source Code</a>
            </div>
          </div>
        </div>
        <div className='project-container'>
          <div className='img-wrapper'>
            <img src={ApiIpa} alt='a brerwery finder web app'/>
          </div>
          <div className='text-wrapper'>
            <h4>APIs for IPAs</h4>
            <p>
              A web app that will find you beer! APIs for IPAs is a brewery finder built on Chris Mears' Open Brewery DB API. Users can enter their ZIP code to query the database and results will be displayed on an embedded Google Map with web links if the user desires to find more information.
            </p>
            <div className='link-container'>
              <a href='https://noahthedev.github.io/APIs-for-IPAs/' target='_blank' rel='noreferrer'className='live'>See Live</a>
              <a href='https://github.com/noahthedev/APIs-for-IPAs' target='_blank' rel='noreferrer' className='source'>Source Code</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}