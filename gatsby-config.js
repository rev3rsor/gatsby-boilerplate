/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          $assets: "src/assets",
          $components: "src/components",
          $helpers: "src/helpers",
          "$styled-components": "src/styled-components",
        },
        extensions: [],
      },
    },
    `gatsby-plugin-styled-components`,
  ],
}
