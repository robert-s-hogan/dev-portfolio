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
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "posts",
                path: `${__dirname}/src/posts`,
            },
        },
        {
            resolve: "gatsby-plugin-page-creator",
            options: {
                path: `${__dirname}/src/posts`,
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
                defaultLayouts: {
                    posts: require.resolve("./src/components/posts-layout.js"),
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
            },
        },
        {
            resolve: "gatsby-source-sanity",
            options: {
                projectId: "cruda0lx",
                dataset: "production",
            },
        },
        "gatsby-plugin-postcss",
    ],
};
