module.exports = {
  siteMetadata: {
    title: `Joy Jang Portfolio`,
    description: `Joy Jang Portfolio: motion designer and illustrator based in Los Angeles.`,
    author: ``,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `joyjang-portfolio`,
        short_name: `joyjang-portfolio`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#3515AB`,
        display: `minimal-ui`,
        icon: `src/images/joyjang-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
