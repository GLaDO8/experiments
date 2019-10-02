import React from "react"
import { graphql } from "gatsby"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import StyledBlogpost from "./blog-post.module.css"
import Img from "gatsby-image"

function BlogPost(props) {
  const post = props.data.markdownRemark
  const { title, date, description, cover, tags } = post.frontmatter

  return (
    <div>
      <Navbar />
      <div class={StyledBlogpost.article}>
        <div class={StyledBlogpost.cover_image}>
          <Img sizes={cover.childImageSharp.fixed} />
        </div>
        <p class={StyledBlogpost.title}>{title}</p>
        <p class={StyledBlogpost.subtitle}>{description}</p>
        <p class={StyledBlogpost.date}>{date}</p>
        <div
          class={StyledBlogpost.main_body}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
      <Footer />
      {/* <div>
        tags:
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-around`,
            listStyle: `none`,
          }}
        >
          {tags.map(t => (
            <li key={kebabCase(t)}>
              <Link to={`/tags/${kebabCase(t)}`}>{t}</Link>
            </li>
          ))}
        </ul>
      </div> */}
    </div>
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
        date
        cover {
          childImageSharp {
            fixed(width: 1000) {
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
`
