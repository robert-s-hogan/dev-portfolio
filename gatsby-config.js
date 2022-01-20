module.exports = {
    siteMetadata: {
        siteUrl: "https://roberthogan.dev/",
        title: "Frontend Engineer Portfolio | Robert Hogan",
        description:
            "Robert is a software engineer in California that mostly focuses on the front-end of the web. I engineer beatiful websites that are fast, functional and accessible to everyone.",
        image: "https://res.cloudinary.com/dmfdjwwgb/image/upload/v1630950348/robertshogan.com/J_R___T_8.21.21-31_copy_k9zia3.jpg",
    },
    plugins: [
        "gatsby-plugin-sitemap",
        "gatsby-plugin-react-helmet",
        {
            resolve: `gatsby-plugin-canonical-urls`,
            options: {
                siteUrl: `https://roberthogan.dev/`,
            },
        },
        "gatsby-remark-images",
        {
            resolve: "gatsby-plugin-mdx",
            options: {
                gatsbyRemarkPlugins: [
                    {
                        resolve: "gatsby-remark-images",
                        options: {
                            maxWidth: 1200,
                        },
                    },
                ],
                // defaultLayouts: {
                //     posts: require.resolve("./src/components/posts-layout.js"),
                // },
            },
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                // The property ID; the tracking code won't be generated without it
                trackingId: "G-Q7HR2Q297C",
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
                // Defers execution of google analytics script after page load
                defer: false,
                // Any additional optional fields
                sampleRate: 5,
                siteSpeedSampleRate: 10,
                cookieDomain: "example.com",
                // defaults to false
                enableWebVitalsTracking: true,
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: `${__dirname}/src/images`,
            },
        },
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-source-sanity",
            options: {
                projectId: "4qlup7ai",
                dataset: "projects",
                watchMode: "true",
            },
        },
        "gatsby-plugin-postcss",
    ],
};
