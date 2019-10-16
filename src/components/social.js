import React from "react"
import Behance from "../images/behance.svg"
import Instagram from "../images/instagram.svg"
import Twitter from "../images/twitter.svg"
import Linkedin from "../images/linkedin.svg"
import Github from "../images/github.svg"
import socialStyles from "./social.module.css"

const Social = () => (
  <div class={socialStyles.icon_tray}>
    <a
      href="https://www.behance.net/ShreyasGupta"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Behance class={socialStyles.svg} />
    </a>
    <a
      href="https://www.instagram.com/awwmaaigawwd/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Instagram class={socialStyles.svg} />
    </a>
    <a
      href="https://twitter.com/awwmaaigawwd"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Twitter class={socialStyles.svg} />
    </a>
    <a
      href="https://www.linkedin.com/in/shreyas-gupta/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Linkedin class={socialStyles.svg} />
    </a>
    <a
      href="https://github.com/GLaDO8"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Github class={socialStyles.svg} />
    </a>
  </div>
)

export default Social
