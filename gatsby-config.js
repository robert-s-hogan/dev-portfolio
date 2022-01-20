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
            resolve: "gatsby-plugin-google-tagmanager",
            options: {
                id: "G-Q7HR2Q297C",

                // Include GTM in development.
                //
                // Defaults to false meaning GTM will only be loaded in production.
                includeInDevelopment: false,

                // datalayer to be set before GTM is loaded
                // should be an object or a function that is executed in the browser
                //
                // Defaults to null
                defaultDataLayer: { platform: "gatsby" },

                // Specify optional GTM environment details.
                gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
                gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
                dataLayerName: "YOUR_DATA_LAYER_NAME",

                // Name of the event that is triggered
                // on every Gatsby route change.
                //
                // Defaults to gatsby-route-change
                routeChangeEventName: "YOUR_ROUTE_CHANGE_EVENT_NAME",
                // Defaults to false
                enableWebVitalsTracking: true,
                // Defaults to https://www.googletagmanager.com
                selfHostedOrigin: "YOUR_SELF_HOSTED_ORIGIN",
            },
        },
        {
            resolve: `gatsby-plugin-facebook-pixel`,
            options: {
                pixelId: "975859380015760",
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
