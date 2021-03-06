import React from 'react'
import './Contact.css'

export default class Contact extends React.Component {
  render() {
    return (
      <section className='contact' id='contact'>
        <h3>Get In Touch</h3>
        <div className='contact-section'>
          <form action="https://formspree.io/f/mzbkvded" method="POST">
            <label htmlFor="user-name">Name:</label>
            <input id="user-name" type="text" name="name" required/>

            <label htmlFor="user-email">Email:</label>
            <input id="user-email" type="text" name="email" required/>

            <label htmlFor="user-message">Message:</label>
            <textarea id="user-message" name="message" required/>
            <div className='button-container'>
            <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </section>
    )
  }
}
