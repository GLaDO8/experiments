const path = require(`path`)
module.exports = {
  siteMetadata: {
    title: "Shreyas Gupta",
    description: "The Design and development portfolio of Shreyas gupta",
    url: "https://www.glado8.github.io", // No trailing slash allowed!
    image: "/images/snape.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@awwmaaigawwd",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: path.join(__dirname, `src`, `pages`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.join(__dirname, `content`),
        name: `content`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {},
      },
    },
    //disqus plugin for comments
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `shreyasgupta`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
        optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // Enables Google Optimize Experiment ID
        experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // Set Variation ID. 0 for original 1,2,3....
        variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "example.com",
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sass`,
    // `gatsby-transformer-remark`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-polyfill-io`,
    `gatsby-plugin-theme-ui`,
  ],
}
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "Mdx") {
    const route = createFilePath({ node, getNode, basePath: "posts" })
    createNodeField({
      node,
      name: "route",
      value: route,
    })
  }
}
