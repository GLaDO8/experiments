import React from "react";
import Background from "../images/texture-n.svg";
import "./contact.scss";

const AboutPage = () => (
    <div>
      <Background class='bg'></Background>
      <form id="fs-frm" name="simple-contact-form" accept-charset="utf-8" action="https://formspree.io/shreyas.charming@gmail.com" method="post">
        <fieldset id="fs-frm-inputs">
          <label for="full-name">Full Name</label>
          <input type="hidden" name="_subject" value="New formspree submission!"/>
          <input type="text" name="name" id="full-name" placeholder="First and Last" required=""/>
          <label for="email-address">Email Address</label>
          <input type="email" name="_replyto" id="email-address" placeholder="blahblah.meh@cooldomain.com" required=""/>
          <label for="message">Message</label>
          <textarea rows="5" name="message" id="message" placeholder="Wanna meet up? Chat over coffee/beer? or just messing around? add your message!" required=""></textarea>
          <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission"/>
          <input type="text" name="_gotcha" style="display:none" />
        </fieldset>
        <input type="submit" value="Submit"/>
      </form>
    </div>
  )
  ;
  
  export default AboutPage;