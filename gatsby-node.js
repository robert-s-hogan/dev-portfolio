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
//                         collection {
//                             title
//                             description
//                         }
//                         body {
//                             children {
//                                 text
//                             }
//                             style
//                             list
//                         }
//                         publishedAt
//                         techUsed {
//                             title
//                             description
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
//             component: require.resolve("./src/components/posts.js"),
//             context: { slug: edge.node.slug.current },
//         });
//     });
// };
