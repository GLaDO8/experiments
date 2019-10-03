const path = require("path")
const { createFilePath } = require(`gatsby-source-filesystem`)

// the connection between the blog post template and the blog article
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    resolve(
      graphql(`
        {
          allMdx(
            sort: { order: DESC, fields: [frontmatter___date] }
            limit: 1000
          ) {
            edges {
              node {
                fields {
                  slug
                }
                frontmatter {
                  title
                }
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          console.log(result.errors)
          return reject(result.errors)
        }

        const blogTemplate = path.resolve("./src/templates/blog-post.js")

        result.data.allMdx.edges.forEach(({ node }) => {
          createPage({
            path: node.fields.slug,
            component: blogTemplate,
            context: {
              slug: node.fields.slug,
            }, // additional data can be passed via context
          })
        })
        return
      })
    )
  })
}

//onCreateNode is called whenever a node is created
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {
    //createFilePath creates a slug based on the title of the node (helper function of gatsby-source-filesystem)
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    //extends a node with additional fields
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}
if (process.env.NODE_ENV === "development") {
  process.env.GATSBY_WEBPACK_PUBLICPATH = "/"
}
