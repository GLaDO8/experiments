import React from "react"
import Gatsby from "../images/gatsby.svg"
import Tailwind from "../images/tailwind.svg"
import Travis from "../images/travis.svg"
import Reacticon from "../images/reacticon.svg"
import "./libsframes.scss"

const Libsframes = () => (
  <div class="icon_bank">
    <a
      href="https://www.behance.net/ShreyasGupta"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Gatsby class="svg-icon" />
    </a>
    <a
      href="https://www.instagram.com/awwmaaigawwd/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Tailwind class="svg-icon" />
    </a>

    <a
      href="https://twitter.com/awwmaaigawwd"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Travis class="svg-icon" />
    </a>

    <a
      href="https://www.linkedin.com/in/shreyas-gupta/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Reacticon class="svg-icon" />
    </a>
  </div>
)

export default Libsframes
