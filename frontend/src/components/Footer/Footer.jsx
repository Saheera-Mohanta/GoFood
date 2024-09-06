import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
              <div className="logo-img">
              <img src={assets.icon_logo} alt=""/>
              <h1>Go<span>Food</span></h1>
              </div>
              <h3>Contact Us<hr/></h3>
              <p>Phone: +1-234-567-8900</p>
              <p>Email: <a href="mailto:support@foodapp.com">support@foodapp.com</a></p>
              <p>Address: 1234 Elm St, City, Country</p>
              <p className="contact-note">
                Interested in joining us? <a href="mailto:partners@foodapp.com">Contact us to add your restaurant!</a>
              </p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />              
                </div>
            </div>

            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>

            <div className="footer-content-right">
               <h2>GET IN TOUCH</h2>
               <ul>
                <li>+1-212-456-7878</li>
                <li>contact@gofood.com</li>
               </ul>
            </div>
       </div>
       <hr />
       <p className='footer-copyright'>
        Copyright 2024 @ GoFood.com - All Right Reserved
       </p>
    </div>
  )
}

export default Footer
