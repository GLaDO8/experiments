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
      I’m self-taught designer and developer based in India. Fiddled around with
      Deep learning for a while, won a couple of hackathons before deciding to
      pursue design full-time. I’m now in Bangalore, living each day, one
      traffic jam at a time!
    </p>
  </div>
)
