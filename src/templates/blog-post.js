import React from "react"
import { Link, graphql } from "gatsby"
import theme from "../gatsby-plugin-theme-ui/index"
import styled from "styled-components"
import Img from "gatsby-image"
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer"
import { ThemeProvider } from "theme-ui"
import { createGlobalStyle } from "styled-components"
// lodash is useful for working with arrays, strings and numbers (in this case for tags and reading length)
// kebab case is where all capitalisations are removed and spacings are replaced with "-", like a kebab skewer with all words on it.
import kebabCase from "lodash/kebabCase"

//components
import Navbar from "../components/navbar-light"
import Footer from "../components/footer-light"

//css module
import StyledBlogpost from "../styles/blog-post.module.css"

const GlobalStyle = createGlobalStyle`
  html, body, div {
    background: white;
  }
`
const StyledLink = styled(Link)`
  text-decoration: none;
  font: 12px "Roboto Mono", Helvetica, Arial, serif;
  color: #000;
  font-weight: 400;
  background-color: #f4f4f4;
  border-radius: 4px;
  padding: 5px 10px 5px 10px;
  text-transform: uppercase;
  margin-right: 20px;
  letter-spacing: 0.87px;
  transition: 0.25s all ease-in-out;

  &:hover {
    background-color: #e7e7e7;
  }
`
function BlogPost(props) {
  const post = props.data.mdx
  const {
    title,
    date,
    description,
    cover,
    tags,
    covercredits,
    creditslink,
  } = post.frontmatter
  //calculate time to read using heuristic reading speed of 200 words per minute
  const words = Math.round(post.wordCount.words / 200).toString() + " min read"

  return (
    <div>
      <GlobalStyle />
      <Navbar class={StyledBlogpost.navbar} />
      <div class={StyledBlogpost.article}>
        <p class={StyledBlogpost.title}>{title}</p>
        <p class={StyledBlogpost.subtitle}>{description}</p>
        <div class={StyledBlogpost.metadata}>
          <p class={StyledBlogpost.metacontent}>{date}</p>
          <p class={StyledBlogpost.metacontent}>{words}</p>
        </div>
        <div class={StyledBlogpost.cover_image}>
          <Img sizes={cover.childImageSharp.fixed} />
        </div>
        <a
          href={creditslink}
          class={StyledBlogpost.credits}
          target="_blank"
          rel="noopener noreferrer"
        >
          {covercredits}
        </a>
        <div class={StyledBlogpost.main_body}>
          <ThemeProvider theme={theme}>
            <MDXRenderer>{post.body}</MDXRenderer>
          </ThemeProvider>
        </div>

        {/* generate tag links */}
        <p class={StyledBlogpost.tagtitle}>TAGS</p>
        <div>
          tags:
          <ul
            class={StyledBlogpost.tags}
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `left`,
              listStyle: `none`,
              margin: `none`,
            }}
          >
            {tags.map(t => (
              <li key={kebabCase(t)}>
                <StyledLink to={`/tags/${kebabCase(t)}`}>{t}</StyledLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default BlogPost

export const query = graphql`
  query PostQuery($id: String) {
    mdx(id: { eq: $id }) {
      fields {
        slug
      }
      frontmatter {
        description
        title
        date
        covercredits
        creditslink
        tags
        cover {
          childImageSharp {
            fixed(width: 1000) {
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
        tags
      }
      body
      wordCount {
        words
      }
    }
  }
`
