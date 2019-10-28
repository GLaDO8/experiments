import React from "react"
import { StaticQuery, Link, graphql } from "gatsby"
import articleStyles from "../styles/articles.module.css"
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
          allMdx(sort: { fields: frontmatter___date, order: DESC }, limit: 3) {
            edges {
              node {
                fields {
                  slug
                }
                frontmatter {
                  date
                  title
                  excerpt
                }
              }
            }
          }
        }
      `}
      render={data => (
        <div>
          {data.allMdx.edges.map(({ node }, i) => (
            <div class={articleStyles.postbox}>
              <StyledLink to={node.fields.slug} key={i} className="link">
                <div className={articleStyles.post_list}>
                  <p class={articleStyles.posttitle}>
                    {node.frontmatter.title}
                  </p>
                  <p class={articleStyles.description}>
                    {node.frontmatter.excerpt}
                  </p>
                  <p class={articleStyles.uploaddate}>
                    {node.frontmatter.date}
                  </p>
                </div>
              </StyledLink>
            </div>
          ))}
        </div>
      )}
    />
  </div>
)
