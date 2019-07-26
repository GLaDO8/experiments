import React from "react";
import Layout from "../components/layout";
import Sidebar from "../components/sidebar";
import SEO from "../components/seo";
import { graphql } from "gatsby";
// import BgImg from "../components/bgImage";
// import Img from "gatsby-image"
import Social from "../components/social";
import Background from "../images/texture-n.svg";
import "./index.scss";

const IndexPage = ({ data }) => (
  <Layout>
		<div>
			{/* <Img fluid={data.astronaut.childImageSharp.fluid} class = "side-texture"/> */}
		</div>
		{/* <BgImg
		title = "background"
		fluid = {data.astronaut.childImageSharp.fluid}
		overlayColor = "#04040454"
		></BgImg> */}
		<Sidebar></Sidebar>
		<Background class='bg'></Background>
    <div class = "clipper">
			
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      {/* <Nav/> */}
      <div class="primarytext2">
      	Design. Tech. code. Food. cats. photography.
      </div>
      <div class="primarytext">
      	Design. Tech. code. Food. cats. photography.
      </div>
      <div class="captiontext">
		    Oh, and Indie games!
      </div>
      <div class="secondarytext">
      	Hey there! I’m Shreyas Gupta, a data scientist turned self-taught designer based in India.
      </div>
      <Social>
      </Social>
    </div>
  </Layout>
)
;

export const query = graphql`
query{
  astronaut: file(relativePath:{ eq: "side-texture.png" }){
    childImageSharp{
      fluid(maxWidth: 3130){
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
export default IndexPage;