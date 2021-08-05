import React from 'react'
import './App.css';
import NavBar from '../NavBar/NavBar'
import Greeting from '../Greeting/Greeting'
import About from '../About/About'
import Projects from '../Projects/Projects'
import Skills from '../Skills/Skills'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'

export default class App extends React.Component  {

  render() {
    return (
      <div className="App">
       <NavBar/>
       <Greeting/>
       <About/>
       <Projects/>
       <Skills/>
       <Contact/>
       <Footer/>
      </div>
    )
  }
}


