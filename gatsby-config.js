const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Leon Delaimy',
    description: 'Portfolio',
    siteUrl: 'https://leondelaimy.com',
    image: '/me-icon.png',
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
    'gatsby-plugin-smoothscroll',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/me-icon.png',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          '@components': path.resolve(__dirname, 'src/components'),
          '@images': path.resolve(__dirname, 'src/images'),
          '@pages': path.resolve(__dirname, 'src/pages'),
          '@styles': path.resolve(__dirname, 'src/styles'),
          '@animations': path.resolve(__dirname, 'src/animations'),
          '@hooks': path.resolve(__dirname, 'src/hooks'),
        },
      },
    },
  ],
}
