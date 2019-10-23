import React from "react"
import Navbar from "../components/navbar"
import SEO from "../components/seo"
import { Link, graphql } from "gatsby"
import Footer from "../components/footer"
import indexStyles from "../styles/index.module.css"
import Arrow from "../images/arrow.svg"
import Img from "gatsby-image"
import styled from "styled-components"
import Intro from "../components/intro"
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
const IndexPage = props => {
  const postList = props.data.allMdx
  return (
    <div>
      <Navbar />
      <SEO
        title="Shreyas Gupta"
        keywords={[`Portfolio`, `Blog`, `Shreyas Gupta`, `Design Portfolio`]}
      />
      <Intro />
      <div class={indexStyles.writings}>
        <p class={indexStyles.subsectitle}>FRESH OUTTA KEYBOARD</p>
        <div class={indexStyles.listtt}>
          {postList.edges.map(({ node }, i) => (
            <div class={indexStyles.postbox}>
              <StyledLink to={node.fields.slug} key={i} className="link">
                <div className={indexStyles.post_list}>
                  <div class={indexStyles.post_image}>
                    <Img
                      fluid={node.frontmatter.thumbnail.childImageSharp.fixed}
                    />
                  </div>
                  <p class={indexStyles.posttitle}>{node.frontmatter.title}</p>
                  <p class={indexStyles.description}>
                    {node.frontmatter.description}
                  </p>
                  <p class={indexStyles.uploaddate}>{node.frontmatter.date}</p>
                </div>
              </StyledLink>
            </div>
          ))}
        </div>
      </div>
      <div class={indexStyles.bottompadding}>
        <StyledLink to="/blog/">
          <span class={indexStyles.blogbutton}>VIEW BLOG</span>
          <span>
            <Arrow class="svg" />
          </span>
        </StyledLink>
      </div>
      {/* <div class={indexStyles.reads}>
          <p class={indexStyles.subsectitle}>RECENT READS</p>
          <ul>
            <li>The less Wrong</li>
            <li>Hypercritical blog</li>
            <li>Onion news</li>
            <li>Ribbonfarm blog</li>
          </ul>
        </div> */}
      <Footer />
    </div>
  )
}
export const query = graphql`
  query PostListQuery {
    allMdx(sort: { fields: frontmatter___date, order: DESC }, limit: 4) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date
            title
            description
            thumbnail {
              childImageSharp {
                fixed(width: 800) {
                  base64
                  tracedSVG
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
        }
      }
    }
  }
`

export default IndexPage
