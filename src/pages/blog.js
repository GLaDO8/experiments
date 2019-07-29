import React from "react"
// import Nav from '../components/nav';
// import SEO from "../components/seo";
import { Link, graphql } from "gatsby"
// import BgImg from "../components/bgImage";
// import Img from "gatsby-image"
// import Social from "../components/social";
import Layout from "../components/layout"

const BlogPage = props => {
  const postList = props.data.allMarkdownRemark
  return (
    <Layout>
      {postList.edges.map(({ node }, i) => (
        <Link to={node.fields.slug} key={i} className="link">
          <div className="post-list">
            <h1>{node.frontmatter.title}</h1>
            <span>{node.frontmatter.date}</span>
            <p>{node.excerpt}</p>
          </div>
        </Link>
      ))}
    </Layout>
  )
}
export default BlogPage

export const listQuery = graphql`
  query ListQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          fields {
            slug
          }
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM Do YYYY")
            title
          }
        }
      }
    }
  }
`
//(formatString: "MMMM Do YYYY")
