exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const result = await graphql(`
        {
            allSanityPost(filter: { slug: { current: { ne: "null" } } }) {
                edges {
                    node {
                        title
                        slug {
                            current
                        }
                        collection {
                            title
                            description
                        }
                        body {
                            children {
                                text
                            }
                            style
                            list
                        }
                        publishedAt(formatString: "MMM DD, YY")
                        techUsed {
                            title
                            description
                        }
                        mainImage {
                            asset {
                                path
                            }
                        }
                    }
                }
            }
        }
    `);

    if (result.errors) {
        throw result.errors;
    }

    const projects = result.data.allSanityPost.edges || [];
    projects.forEach((edge, index) => {
        const path = `/post/${edge.node.slug.current}`;

        createPage({
            path,
            component: require.resolve("./src/components/posts-layout.js"),
            context: {
                title: edge.node.title,
                slug: edge.node.slug.current,
                publishedAt: edge.node.publishedAt,
                techUsed: edge.node.title,
                techUsedDescription: edge.node.description,
                image: `https://cdn.sanity.io/${edge.node.mainImage.asset.path}`,
                text: edge.node,
            },
        });
    });
};
