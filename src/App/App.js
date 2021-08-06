import React from 'react'
import './App.css';
import NavBar from '../NavBar/NavBar'
import Greeting from '../Greeting/Greeting'
import About from '../About/About'
import Projects from '../Projects/Projects'
import Skills from '../Skills/Skills'
import Contact from '../Contact/Contact'

export default class App extends React.Component  {

  render() {
    return (
      <div className="App">
       <NavBar/>
       <Greeting/>
       <About/>
       <Projects/>
       <div className='flex-container'>
       <Skills/>
       <Contact/>
       </div>
       <footer className='footer'>
         <p>&#169; Noah Roberts</p>
       </footer>
      </div>
    )
  }
}


