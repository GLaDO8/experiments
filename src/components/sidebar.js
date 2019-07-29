import React from "react"
import { Link } from "gatsby"
import "./sidebar.scss"

const sideBar = () => (
  <div>
    <div class="sidebar">
      <Link to="/blog/" class="butt butt-c1">
        <span class="icon-text">DESIGNER</span>
      </Link>
      <Link to="/blog/" class="butt butt-c2">
        <span class="icon-text">DEVELOPER</span>
      </Link>
      <Link to="/blog/" class="butt butt-c3">
        <span class="icon-text">PHOTOGRAPHY</span>
      </Link>
      <Link to="/blog/" class="butt butt-c4">
        <span class="icon-text">BLOG</span>
      </Link>
      <Link to="/about/" class="butt butt-c5">
        <span class="icon-text">ABOUT</span>
      </Link>
      <Link to="/contact/" class="butt butt-c6">
        <span class="icon-text">CONTACT</span>
      </Link>
    </div>
  </div>
)
export default sideBar
