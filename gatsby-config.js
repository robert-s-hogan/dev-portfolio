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
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                // You can add multiple tracking ids and a pageview event will be fired for all of them.
                trackingIds: [
                    "G-Q7HR2Q297C", // Google Analytics / GA
                    "AW-CONVERSION_ID", // Google Ads / Adwords / AW
                    "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
                ],
                // This object gets passed directly to the gtag config command
                // This config will be shared across all trackingIds
                gtagConfig: {
                    optimize_id: "OPT_CONTAINER_ID",
                    anonymize_ip: true,
                    cookie_expires: 0,
                },
                // This object is used for configuration specific to this plugin
                pluginConfig: {
                    // Puts tracking script in the head instead of the body
                    head: false,
                    // Setting this parameter is also optional
                    respectDNT: true,
                    // Avoids sending pageview hits from custom paths
                    exclude: ["/preview/**", "/do-not-track/me/too/"],
                },
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
