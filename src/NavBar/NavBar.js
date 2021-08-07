import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import './NavBar.css'

export default class NavBar extends React.Component {
  render() {
    return (
      <div className='nav'>
          <a href='https://github.com/noahthedev' target='_blank' rel="noreferrer" className='nav-links'>
            <FontAwesomeIcon icon={faGithub} className='nav-icon'/>
          </a>
          <a href='https://www.linkedin.com/in/noahmichaelroberts/' target='_blank' rel="noreferrer" className='nav-links'>
            <FontAwesomeIcon icon={faLinkedin} className='nav-icon'/>
          </a>
      </div>
    )
  }
}

