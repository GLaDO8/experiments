import React from "react"
import Navbar from "../components/navbar"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Social from "../components/social"
import Footer from "../components/footer"
import indexStyles from "./index.module.css"

const IndexPage = () => (
  <div>
    <Navbar />
    <SEO
      title="Shreyas Gupta"
      keywords={[`Portfolio`, `Blog`, `Shreyas Gupta`]}
    />
    <div class="intro"></div>
    <h1 class={indexStyles.primarytext}>Shreyas k. Gupta is a Designer.</h1>
    <p class={indexStyles.caption_italic}>
      Netizen, <span class={indexStyles.caption_regular}>welcome.</span>
    </p>
    <p class={indexStyles.secondarytext}>
      I’m self-taught designer and developer based in India. Fiddled around with
      Deep learning for a while, won a couple of hackathons before deciding to
      pursue design full-time. I’m now in Bangalore, living each day, one
      traffic jam at a time!
    </p>
    <h1 class={indexStyles.portfolio_title}>Writings & Readings</h1>
    <div class={indexStyles.writings_readings}>
      <div class={indexStyles.writings}>
        <p class={indexStyles.subsectitle}>FRESH OUTTA KEYBOARD</p>
      </div>
      <div class={indexStyles.reads}>
        <p class={indexStyles.subsectitle}>RECENT READS</p>
        <ul>
          <li>The less Wrong</li>
          <li>Hypercritical blog</li>
          <li>Onion news</li>
          <li>Ribbonfarm blog</li>
        </ul>
      </div>
    </div>

    <h1 class={indexStyles.portfolio_title}>Design Projects</h1>
    <h1 class={indexStyles.portfolio_title}>Dev Projects</h1>
    <Footer />
  </div>
)

export const query = graphql`
  query {
    astronaut: file(relativePath: { eq: "side-texture.png" }) {
      childImageSharp {
        fluid(maxWidth: 3130) {
          src
          srcSet
          aspectRatio
          sizes
          base64
        }
      }
    }
  }
`
export default IndexPage
