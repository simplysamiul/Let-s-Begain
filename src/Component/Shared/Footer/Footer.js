import React from 'react';
import './Footer.css';
import footerImg from '../../../resource/footer.png';
import logoOne from '../../../resource/logo.png';

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
                   <p> <i class="fas fa-phone"></i> +880 1735 006 481</p>
                   <p> <i class="far fa-envelope-open"></i> Dhaka-1216, Bangladesh</p>
                   <p> <i class="fas fa-map-marker-alt"></i> support@hajicamp.com</p>
                   <div className="social-icons">
                        
                   </div>
               </div>
               <div className="our-services section-title">
                   <h3> Our - Services</h3>
                   <ul>
                       <li>Omra</li>
                       <li>Boro Haz</li>
                       <li>Omra</li>
                       <li>Boro Haz</li>
                       <li>Omra</li>
                       <li>Boro HAz</li>
                   </ul>
               </div>
               <div className="payment-method section-title">
                   <h3>Payment Method</h3>
                   <ul>
                       <li>Omra</li>
                       <li>Boro Haz</li>
                       <li>Omra</li>
                       <li>Boro Haz</li>
                       <li>Omra</li>
                       <li>Boro HAz</li>
                   </ul>
               </div>
              </div>
           </div>
           <marquee>All Copyright © reserved at Let's Begain's authority</marquee>
        </div>
    );
};

export default Footer;