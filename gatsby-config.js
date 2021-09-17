module.exports = {
  // pathPrefix: `/learn.interaction`,

  plugins: [
    {
      resolve: "gatsby-theme-signalwerk",
      options: {
        root: __dirname,
      },
    },
  ],

  siteMetadata: {
    title: "Interaction Design",
    author: "Stefan Huber",
    authorUrl: "http://signalwerk.ch/",
    description: "Articles of Stefan Huber",
    siteUrl: "https://signalwerk.github.io/learn.interaction",
  },
};
