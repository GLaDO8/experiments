import React from "react"
import "./contact.css"

const AboutPage = () => (
  <form
    name="simple-contact-form"
    accept-charset="utf-8"
    action="https://formspree.io/YOUR_EMAIL_HERE"
    method="post"
  >
    <h1>CONTACT ME!</h1>
    <button type="button" class="close">
      Close
    </button>
    <fieldset class="formbox">
      {/* <input type="text" name="_gotcha" class="customisation"/> */}
      <input
        type="hidden"
        name="_subject"
        value="New formspree submission!"
        class="customisation"
      />
      <div class="divbox">
        <label for="full-name">NAME</label>
        <input
          type="text"
          name="name"
          class="input nameinput"
          placeholder="First and Last"
          required=""
        />
        <label for="email-address">EMAIL</label>
        <input
          type="email"
          name="_replyto"
          class="input mailinput"
          placeholder="email@domain.tld"
          required=""
        />
        <label for="message">MESSAGE</label>
        <textarea
          rows="5"
          name="message"
          class="input messageinput"
          placeholder="Wanna meet up? Chat over coffee/beer? or just messing around? add your message!"
          required=""
        />
        <input
          type="hidden"
          name="_subject"
          id="email-subject"
          value="Contact Form Submission"
        />
      </div>
    </fieldset>
    <input type="submit" value="Submit" />
    <div class="bottomdesign">
      <div class="bbutt bbutt-c1" />
      <div class="bbutt bbutt-c2" />
      <div class="bbutt bbutt-c3" />
      <div class="bbutt bbutt-c4" />
      <div class="bbutt bbutt-c5" />
      <div class="bbutt bbutt-c6" />
    </div>
  </form>
)

export default AboutPage
