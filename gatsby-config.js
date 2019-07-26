const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `Shreyas Gupta | Portfolio`,
  },  
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: path.join(__dirname, `src`, `pages`),
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.join(__dirname, `content`),
        name: "content",
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
        }
      }
    },
    //disqus plugin for comments
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `shreyasgupta`
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
  ],
}