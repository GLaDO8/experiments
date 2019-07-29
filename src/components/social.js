import React from "react"
import Behance from "../images/behance.svg"
import Instagram from "../images/instagram.svg"
import Twitter from "../images/twitter.svg"
import Linkedin from "../images/linkedin.svg"
import Github from "../images/github.svg"
import "./social.css"

const Social = () => (
  <div class="icon_tray">
    <ul>
      <li>
        <a
          href="https://www.behance.net/ShreyasGupta"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Behance class="svg" />
        </a>
      </li>

      <li>
        <a
          href="https://www.instagram.com/awwmaaigawwd/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram class="svg" />
        </a>
      </li>

      <li>
        <a
          href="https://twitter.com/awwmaaigawwd"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter class="svg" />
        </a>
      </li>

      <li>
        <a
          href="https://www.linkedin.com/in/shreyas-gupta/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin class="svg" />
        </a>
      </li>

      <li>
        <a
          href="https://github.com/GLaDO8"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github class="svg" />
        </a>
      </li>
    </ul>
  </div>
)

export default Social
