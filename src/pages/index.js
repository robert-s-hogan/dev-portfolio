import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout.js";

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
            <div className="flex relative">
                <div className="md:w-1/2 md:flex-1 absolute md:relative z-10 self-end md:self-center text-white">
                    <p className="space-mono font-bold text-5xl">
                        Hi, I'm Robert.
                    </p>
                    <h1 className="text-xl font-light mt-8">
                        I'm a <span class="font-bold">software engineer</span>{" "}
                        in <span class="font-bold">California</span>. I mostly
                        focus on the <span class="font-bold">front-end</span> of
                        the web.
                    </h1>
                    <hr className="w-1/4 mt-8 mb-4" />
                    <StaticImage
                        src="../images/linkedin.png"
                        alt="LinkedIn Logo"
                        className="text-white mb-8"
                        height={24}
                    />
                </div>
                <div className="md:w-1/2 md:flex-1 pl-8">
                    <StaticImage
                        placeholder="dominantColor"
                        alt="Robert Hogan's Portrait Image"
                        src="https://res.cloudinary.com/dmfdjwwgb/image/upload/e_auto_brightness:-20,e_contrast:-20/e_brightness:-15/v1630950348/robertshogan.com/J_R___T_8.21.21-31_copy_k9zia3.jpg"
                        height={1024}
                    />
                </div>
            </div>

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
