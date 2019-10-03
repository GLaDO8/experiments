import React from "react"
import { Link, graphql } from "gatsby"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import blogStyles from "./blog.module.css"
import Img from "gatsby-image"
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
const BlogPage = props => {
  const postList = props.data.allMdx
  return (
    <div>
      <Navbar />
      <div class={blogStyles.listtt}>
        {postList.edges.map(({ node }, i) => (
          <div class={blogStyles.postbox}>
            <StyledLink to={node.fields.slug} key={i} className="link">
              <div className={blogStyles.post_list}>
                <div class={blogStyles.post_image}>
                  <Img
                    fluid={node.frontmatter.thumbnail.childImageSharp.fixed}
                  />
                </div>
                <p class={blogStyles.posttitle}>{node.frontmatter.title}</p>
                <p class={blogStyles.description}>
                  {node.frontmatter.description}
                </p>
                <p class={blogStyles.uploaddate}>{node.frontmatter.date}</p>
              </div>
            </StyledLink>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  )
}
export default BlogPage
export const listQuery = graphql`
  query ListQuery {
    allMdx(sort: { fields: frontmatter___date, order: DESC }, limit: 10) {
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
                fixed(width: 400) {
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
