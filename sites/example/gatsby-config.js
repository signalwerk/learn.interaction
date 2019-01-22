module.exports = {
  pathPrefix: `/learn.interaction`,

  __experimentalThemes: [{
    resolve: 'gatsby-theme-signalwerk',
    options: {
      root: __dirname,
    }
  }],

  siteMetadata: {
    title: 'Learn Interaction',
    author: 'Stefan Huber',
    authorUrl: 'http://signalwerk.ch/',
  },
};
