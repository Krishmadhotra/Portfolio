import React from"react";
import "./Contact.css";
import Walmart from "../../assets/walmart.png";
import Microsoft from "../../assets/microsoft.png";
import Adobe from "../../assets/adobe.png";
import facebook from "../../assets/facebook.png";
// import facebookIcon from "../../assets/facebook-icon.png";
import TwitterIcon from "../../assets/twitter.png";
// import YouTubeIcon from "../../assets/youtube.png";
import InstagramIcon from "../../assets/instagram.png";

const Contact=()=>{
  return(
    <section id="ContactPage">
      <div id="clients">
        <h1 className="contactPageTitle">My Clients</h1>
        <span className="clientsDesc">
          <p>I have had the oppurtunity to work with a diverse group of companies.Some of the notable companies that I have worked with includes</p>
          <div className="clientImgs">
            <img src={Walmart}  alt ="walmart" className="clientImg" />
            <img src={Adobe}  alt ="Adobe" className="clientImg" />
            <img src={Microsoft}  alt ="Microsoft" className="clientImg" />
            <img src={facebook}  alt ="facebook" className="clientImg" />
            </div>
        </span>

        
      </div>  

      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">Please fill out the form below to discuss any work oppurtunities.</span>
        <form className="contactForm">
          <input className="name" type="text" placeholder="Your Name" />
          <input type="text" className="email" placeholder="Your email" />
          <textarea name="message" rows="5" placeholder="Your Message"className="msg"></textarea>
          <button type="submit" value="send" className="submitBtn">Submit</button>

          <div className="links">
            <a href="https://github.com/Krishmadhotra"><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"  alt="facebookIcon " className="linkhub" /></a>
            <a href="https://twitter.com/KrishMadhotra"><img src={TwitterIcon} alt="TwiiterIcon " className="link" /></a>
            <a href="https://www.linkedin.com/in/krish-sharma-40b0b6227/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Linkedin_circle.svg/100px-Linkedin_circle.svg.png" alt=" YOuTubeIcon" className="link" /></a>
            <a href="https://www.instagram.com/krish_madhotra/" ><img src={InstagramIcon} alt=" InstagramIcon" className="link" /></a>
            
          </div>
        </form>
      </div>
    </section>
  )
}
export default Contact;