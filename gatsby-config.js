module.exports = {
  siteMetadata: {
    title: "Aran Bruce-Caddick",
    description: "Aran Bruce-Caddick's Personal Website",
    author: "@aranbruce",
    siteUrl: "https://www.aranbc.com",
  },
  plugins: [
    "gatsby-plugin-sass",
    // {
    //   resolve: "gatsby-plugin-favicon",
    //   options: {
    //     logo: "./src/images/favicon.png",
    //     icons: {
    //       android: false,
    //       appleIcon: true,
    //       appleStartup: true,
    //       coast: false,
    //       favicons: true,
    //       firefox: false,
    //       yandex: false,
    //       windows: false,
    //     },
    //   },
    // },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Aran Bruce-Caddick",
        short_name: "AranBC",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#ffffff",
        display: "standalone",
        icon: "src/images/favicon.png",
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-113169728-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Setting this parameter is optional
        anonymize: false,
        // Setting this parameter is also optional
        respectDNT: false,
      },
    },
    "gatsby-plugin-offline",
  ],
}
