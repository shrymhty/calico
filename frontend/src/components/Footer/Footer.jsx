import React, { useRef } from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  };


  return (
    <div className="footer">
      <div className="footer-content">
        <div className="company-logo">
          <h1>CALICO</h1>
          <p>Calico and all its associated entities are the intellectual property of Shreya Mohanty.</p>
        </div>
        <div className="company-info">
          <h1>Company</h1>
          <ul>
            <li>Home</li>
            <li>Contact Us</li>
            <li>Policies</li>
            <li>Privacy</li>
          </ul>
        </div>
        <div className="contact">
          <h1>Get In Touch</h1>
          <div className="icons">
            <img src={assets.insta} alt="" />
            <img src={assets.linkedin} alt="" />
          </div>
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <p>FOR ANY CUSTOMISED OR BULK ORDER QUERIES</p>
            <input type="email" name="user_email" placeholder="Your email" required />
            <textarea name="message" placeholder="Your message" required />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
      <div className="copyright">Copyright © 2024 Calico. All rights reserved.</div>
    </div>
  )
}

export default Footer