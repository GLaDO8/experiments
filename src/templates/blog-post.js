import React from "react"
import { graphql } from "gatsby"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import StyledBlogpost from "./blog-post.module.css"
import Img from "gatsby-image"
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer"
import { ThemeProvider } from "theme-ui"
import theme from "../gatsby-plugin-theme-ui/index"

function BlogPost(props) {
  const post = props.data.mdx
  const { title, date, description, cover } = post.frontmatter

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
        <div class={StyledBlogpost.main_body}>
          <ThemeProvider theme={theme}>
            <MDXRenderer>{post.body}</MDXRenderer>
          </ThemeProvider>
        </div>
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
  query PostQuery {
    mdx {
      fields {
        slug
      }
      frontmatter {
        description
        title
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
        tags
      }
      body
    }
  }
`
