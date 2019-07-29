import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import "./blog-post.scss"

function BlogPost(props) {
  const post = props.data.markdownRemark
  const { title, date, description } = post.frontmatter

  return (
    <Layout>
      <div>
        <h1>{title}</h1>
        <h2>{description}</h2>
        <p class="date">{date}</p>
        <div
          class="main-body"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </Layout>
  )
}

export default BlogPost

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
        description
        date(formatString: "MMMM Do YYYY")
      }
    }
  }
`
