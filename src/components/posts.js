// import * as React from "react";
// import { useStaticQuery, graphql, Link } from "gatsby";
// import BlockContent from "@sanity/block-content-to-react";

// const client = require("@sanity/client")({
//     projectId: "cruda0lx",
//     dataset: "production",
//     apiVersion: "2021-03-25",
//     useCdn: true,
// });

// const serializers = {
//     types: {
//         code: props => (
//             <pre data-language={props.node.language}>
//                 <code>{props.node.code}</code>
//             </pre>
//         ),
//     },
// };

// export default function Posts({ title, description }) {
//     const data = useStaticQuery(graphql`
//         query PostData {
//             allSanityPost {
//                 nodes {
//                     author {
//                         id
//                         name
//                     }
//                     publishedAt
//                     title
//                     slug {
//                         current
//                     }
//                     body {
//                         style
//                         list
//                         children {
//                             text
//                             marks
//                         }
//                     }
//                     collection {
//                         description
//                         title
//                     }
//                 }
//             }
//         }
//     `);
//     const posts = data.allSanityPost.nodes;
//     console.log(posts);

//     return (
//         <section
//             id="posts"
//             className="max-w-4xl mx-auto text-white dark:text-black pl-4 mt-8 "
//         >
//             <h2 className="text-sm font-thin uppercase text-white mb-2">
//                 Writing &mdash;
//             </h2>
//             <p className="text-white mb-4">
//                 An open collection of notes, resources, workshops, courses, and
//                 explorations into new technologies.
//             </p>
//             <div className="text-white flex">
//                 {posts.map(post => (
//                     <div
//                         key={post.id}
//                         id={post.id}
//                         className="w-1/3 border p-4 mr-2"
//                     >
//                         <Link to={`post/${post.slug.current}`}>
//                             <p>{post.title}</p>
//                             <p className="text-gray-200 text-xs">
//                                 {post.author}
//                             </p>
//                             {/* <BlockContent
//                             blocks={post.body}
//                             serializers={serializers}
//                         /> */}
//                         </Link>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// }
