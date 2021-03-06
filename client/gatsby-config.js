// require("dotenv").config();

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const path = require(`path`);

module.exports = {
  siteMetadata: {
    title: "Strapi Gatsby Starter",
    description: "A starter for Strapi + Gatsby projects.",
    url: "[insertURL].com",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.API_URL || "http://localhost:1337",
        contentTypes: [`restaurant`, "category"],
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: `${__dirname}/src/images/icons`,
        },
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-offline",
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Strapi Gatsby Starter",
        short_name: "Strapi Gatsby Starter",
        description: "A starter for Strapi + Gatsby projects.",
        start_url: "/",
        background_color: "#f4f4f4",
        theme_color: "#373737",
        display: "minimal-ui",
        // icon: 'src/images/gatsby-icon.png', //UPDATE // This path is relative to the root of the site.
      },
    },
  ],
};
