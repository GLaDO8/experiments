import React from "react"
//components
import Navbar from "../components/navbar"
import Intro from "../components/intro"
import Featured from "../components/featured"
import Articles from "../components/articles"
import Findings from "../components/findings"
import Footer from "../components/footer"
import SEO from "../components/seo"

import { Link } from "gatsby"
import indexStyles from "../styles/index.module.css"
import Arrow from "../images/arrow.svg"
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
const IndexPage = () => {
  return (
    <div>
      <Navbar />
      <SEO
        title="Shreyas Gupta"
        keywords={[`Portfolio`, `Blog`, `Shreyas Gupta`, `Design Portfolio`]}
      />
      <Intro />
      <Featured />
      <div class={indexStyles.maincontent}>
        <div class={indexStyles.articles}>
          <p class={indexStyles.subsectitle}>FRESH OUTTA KEYBOARD</p>
          <Articles />
          <div class={indexStyles.bottompadding}>
            <StyledLink to="/blog/">
              <span class={indexStyles.blogbutton}>VIEW BLOG</span>
              <span>
                <Arrow class="svg" />
              </span>
            </StyledLink>
          </div>
        </div>
        <div class={indexStyles.findings}>
          <p class={indexStyles.subsectitle}>INTERESTING READS</p>
          <Findings />
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default IndexPage
