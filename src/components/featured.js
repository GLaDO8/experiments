import React from "react"
import { StaticQuery, Link, graphql } from "gatsby"
import indexStyles from "../styles/featured.module.css"
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
export default () => (
  <div>
    <StaticQuery
      query={graphql`
        query {
          allMdx(sort: { fields: frontmatter___date, order: DESC }, limit: 2) {
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
      `}
      render={data => (
        <div class={indexStyles.writings}>
          <div class={indexStyles.listtt}>
            {data.allMdx.edges.map(({ node }, i) => (
              <div class={indexStyles.postbox}>
                <StyledLink to={node.fields.slug} key={i} className="link">
                  <div className={indexStyles.post_list}>
                    <div class={indexStyles.post_image}>
                      <Img
                        fluid={node.frontmatter.thumbnail.childImageSharp.fixed}
                      />
                    </div>
                    <p class={indexStyles.posttitle}>
                      {node.frontmatter.title}
                    </p>
                    <p class={indexStyles.description}>
                      {node.frontmatter.description}
                    </p>
                    <p class={indexStyles.uploaddate}>
                      {node.frontmatter.date}
                    </p>
                  </div>
                </StyledLink>
              </div>
            ))}
          </div>
        </div>
      )}
    />
  </div>
)
