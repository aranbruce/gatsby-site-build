module.exports = {
  siteMetadata: {
    title: 'Aran Bruce-Caddick',
    description: 'Aran Bruce-Caddick\'s Personal Website',
    author: '@aranbruce'
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Aran Bruce-Caddick',
        short_name: 'AranBC',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        display: 'standalone',
        icon: 'src/images/favicon.png'
      }
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: '/images/' 
        }
      }
    },
    `gatsby-plugin-react-helmet`
  ]
}
