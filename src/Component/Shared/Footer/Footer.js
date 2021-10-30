import React from 'react';
import './Footer.css';
import footerImg from '../../../resource/footer.png';
import logoOne from '../../../resource/logo.png';
import payment from '../../../resource/payment.png';

const Footer = () => {
    return (
        <div style={{background:"#082740"}}>
            <img style={{width:"100%"}} src={footerImg} alt="" /> <br />
           <div className="footer-header">
           <img src={logoOne} width="120" height="120" className="d-inline-block align-top" alt="" />
           <h2>Let's begain <span>With Us</span> </h2>
           </div>
           <div style={{padding:"50px"}}>
              <div className="footer-body">
              <div className="contact-info section-title">
                   <h3>Contact - Us</h3>
                   <p> <i className="fas fa-phone"></i> +880 1735 006 481</p>
                   <p> <i className="far fa-envelope-open"></i> Dhaka-1216, Bangladesh</p>
                   <p> <i className="fas fa-map-marker-alt"></i> support@hajicamp.com</p>
                   <div className="social-icons">
                   <a href="https://facebook.com/" target="_blank"><i className="fab fa-facebook-square"></i></a>
                   <a href="https://twitter.com/" target="_blank"><i className="fab fa-twitter-square"></i></a>
                   <a href="https://www.linkedin.com/" target="_blank"><i className="fab fa-linkedin"></i></a>
                   <a href="https://www.instagram.com/"><i className="fab fa-instagram-square"></i></a>
                   </div>
               </div>
               <div className="our-services section-title">
                   <h3> Our - Services</h3>
                   <ul>
                       <li>Umrah Package</li>
                       <li>Umrah &#38; Dubai Package</li>
                       <li>Umrah &#38; Egypt Package</li>
                       <li>Umrah &#38; Turkey Package</li>
                       <li>Ramadan With Eid-Ul-Fitr In - Makkha</li>
                       <li>Ramadan With Eid-Ul-Fitr In - Madinah</li>
                       <li>Eid-Ul-Adha In - Makkha</li>
                       <li>Eid-Ul-Adha In - Madinah</li>
                   </ul>
               </div>
               <div className="payment-method section-title">
                   <h3>Payment Method</h3>
                    <img src={payment} alt="" />
               </div>
              </div>
           </div>
           <marquee>All Copyright © reserved at Let's Begain's authority</marquee>
        </div>
    );
};

export default Footer;