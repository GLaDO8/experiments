import React from "react"
import { Link } from "gatsby"
import navStyles from "../styles/navbar-light.module.css"
import styled from "styled-components"

const StyledLink = styled(Link)`
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`
const sideBar = () => (
  <div class={navStyles.navbar_total}>
    <div class={navStyles.main_logo}>
      <StyledLink to="/">
        <span class={navStyles.logo_text}>SG</span>
      </StyledLink>
    </div>
    <div class={navStyles.navbar}>
      <StyledLink to="/blog/">
        <span class={navStyles.icon_text}>BLOG</span>
      </StyledLink>
      <StyledLink to="/blog/">
        <span class={navStyles.icon_text}>RESUME</span>
      </StyledLink>
      <StyledLink to="/contact/">
        <span class={navStyles.icon_text}>ABOUT</span>
      </StyledLink>
    </div>
  </div>
)
export default sideBar
