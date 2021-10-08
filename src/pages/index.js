import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Layout from "../components/layout.js";

import { imageWrapper } from "../styles/index.module.css";

export default function IndexPage() {
    const data = useStaticQuery(graphql`
        query GetBlogPosts {
            allMdx {
                nodes {
                    id
                    slug
                    frontmatter {
                        title
                    }
                }
            }
            allSanityEpisode(sort: { fields: date, order: DESC }, limit: 20) {
                nodes {
                    id
                    title
                    guest {
                        name
                    }
                    gatsbyPath(
                        filePath: "/episode/{SanityEpisode.slug__current}"
                    )
                }
            }
        }
    `);
    const posts = data.allMdx.nodes;
    const episodes = data.allSanityEpisode.nodes;
    return (
        <Layout>
            <p>Hello</p>
            <h1>Robert Hogan is a freelance frontend engineer </h1>
            {/* <Link to="/about">
                <button className="w-1/2 flex items-center justify-center rounded-full bg-black text-white">
                    About
                </button>
            </Link>

            <h2>Check out my recent posts</h2>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <Link to={post.slug}>{post.frontmatter.title}</Link>{" "}
                        <small>posted</small>
                    </li>
                ))}
            </ul> */}
            {/* 
            <h2>Latest Episodes</h2>
            <ul>
                {episodes.map(episode => (
                    <li key={episode.id}>
                        <Link to={episode.gatsbyPath}>
                            {episode.title} (with {episode.guest?.[0]?.name})
                        </Link>
                    </li>
                ))}
            </ul>
            <a href="https://www.learnwithjason.dev">
                Watch all episodes of <em>Learn with Jason</em>
            </a> */}
        </Layout>
    );
}
