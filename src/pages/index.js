import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
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
            <div className={imageWrapper}>
                <StaticImage
                    src="../images/icon.png"
                    alt="Gatsby Icon"
                    placeholder="dominantColor"
                    width={300}
                    height={300}
                />
            </div>
            <h1>Hello Frontend Masters</h1>
            <Link to="/about">About this site</Link>

            <h2>Check out my recent posts</h2>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <Link to={post.slug}>{post.frontmatter.title}</Link>{" "}
                        <small>posted</small>
                    </li>
                ))}
            </ul>
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
