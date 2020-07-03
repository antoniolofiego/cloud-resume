module.exports = {
    siteMetadata: {
        title: `Antonio Lo Fiego`,
        description: `Portfolio/Resume of Antonio Lo Fiego, AWS Certified Data Professional and Software Engineer`,
        author: `@antonio_lofiego`,
    },
    plugins: [
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-postcss`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `antonio-lofiego-cloudresume`,
                short_name: `alf-cloudresume`,
                start_url: `/`,
                icon: `static/favicon.png`, // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
};
