import React from "react"
import { StaticQuery, graphql } from "gatsby"
import introStyles from "../styles/intro.module.css"
import Img from "gatsby-image"

export default () => (
  <div>
    <div class={introStyles.centerAlign}>
      <div class={introStyles.inline}>
        <StaticQuery
          query={graphql`
            query {
              dp: file(relativePath: { eq: "dp.png" }) {
                childImageSharp {
                  fixed {
                    base64
                    aspectRatio
                    width
                    height
                    src
                    srcSet
                    srcWebp
                    srcSetWebp
                    originalName
                  }
                }
              }
            }
          `}
          render={data => (
            <div class={introStyles.dp}>
              <Img fluid={data.dp.childImageSharp.fixed} />
            </div>
          )}
        />
      </div>
      <div class={introStyles.inline}>
        <p class={introStyles.italictext}>Netizen,</p>
        <p class={introStyles.primarytext}>Welcome. I'm Shreyas Gupta.</p>
      </div>
    </div>
    <p class={introStyles.secondarytext}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </p>
  </div>
)
