// import * as React from "react";
// import { graphql } from "gatsby";
// import { GatsbyImage } from "gatsby-plugin-image";
// import Layout from "../../components/layout.js";

// export const query = graphql`
//     query AllPosts {
//         allSanityPost {
//             edges {
//                 node {
//                     body {
//                         children {
//                             text
//                         }
//                     }
//                     id
//                     slug {
//                         current
//                     }
//                     title
//                     author {
//                         name
//                     }
//                 }
//             }
//         }
//     }
// `;

// export default function SantityEpisode({ data }) {
//     const episode = data.sanityEpisode;
//     return (
//         <Layout title={episode.title} description={episode.description}>
//             {episode.image?.asset?.gatsbyImageData && (
//                 <GatsbyImage
//                     image={episode.image.asset.gatsbyImageData}
//                     alt={episode.title}
//                 />
//             )}
//             <h1>{episode.title}</h1>
//             <p>
//                 (posted {episode.date} - {episode.description})
//             </p>
//             <ul>
//                 <li>
//                     <a
//                         href={`https://www.learnwithjason.dev/${episode.slug.current}`}
//                     >
//                         full episode and details
//                     </a>
//                 </li>
//                 <li>
//                     <a href={`https://youtu.be/${episode.youtubeID}`}>
//                         Watch on YouTube
//                     </a>
//                 </li>
//             </ul>
//         </Layout>
//     );
// }
