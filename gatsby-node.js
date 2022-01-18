// exports.createPages = async ({ graphql, actions }) => {
//     const { createPage } = actions;

//     const result = await graphql(`
//         {
//             allSanityPost(filter: { slug: { current: { ne: "null" } } }) {
//                 edges {
//                     node {
//                         title
//                         slug {
//                             current
//                         }
//                         body {
//                             _rawChildren
//                         }
//                         publishedAt(formatString: "MMM DD, YY")
//                         mainImage {
//                             asset {
//                                 path
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     `);

//     if (result.errors) {
//         throw result.errors;
//     }

//     const projects = result.data.allSanityPost.edges || [];

//     projects.forEach((edge, index) => {
//         const path = `/post/${edge.node.slug.current}`;

//         createPage({
//             path,
//             component: require.resolve("./src/components/posts-layout.js"),
//             context: {
//                 title: edge.node.title,
//                 slug: edge.node.slug.current,
//                 publishedAt: edge.node.publishedAt,
//                 image: `https://cdn.sanity.io/${edge.node.mainImage.asset.path}`,
//                 blogContent: edge.node,
//             },
//         });
//     });
// };
