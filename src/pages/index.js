import React from "react";
import Nav from '../components/nav';
import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql } from "gatsby";
import BgImg from "../components/bgImage";
import Social from "../components/social";
import "./index.css"

const IndexPage = ({ data }) => (
  <Layout>
    <div class = "clipper">
      <BgImg
        title = "background"
        fluid = {data.astronaut.childImageSharp.fluid}
        overlayColor = "#04040454"
      >
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <Nav/>
        <div class="primarytext">
        Design. Tech. code. Food. cats. photography. 
        </div>
        <div class="secondarytext">
            Hey there! I’m Shreyas Gupta, a data scientist turned self-taught designer based in India.
        </div>
        <Social>
        </Social>
      </BgImg>
    </div>
  </Layout>
)

export const query = graphql`
  query {
    astronaut: file(relativePath: { eq: "background.png" }) {
      childImageSharp {
        fluid(maxWidth: 3130) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
;

export default IndexPage;