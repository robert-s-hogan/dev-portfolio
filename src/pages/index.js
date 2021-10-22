import * as React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout.js";
import ProjectCard from "../components/project-card.js";

export default function IndexPage() {
    const data = useStaticQuery(graphql`
        query AllPosts {
            allSanityPost {
                edges {
                    node {
                        body {
                            children {
                                text
                            }
                        }
                        id
                        slug {
                            current
                        }
                        title
                        author {
                            name
                            _createdAt(formatString: "MMMM DD, YYYY")
                        }
                    }
                }
            }
        }
    `);
    const posts = data.allSanityPost.edges;
    console.log(posts);
    // const episodes = data.allSanityEpisode.nodes;
    return (
        <Layout>
            <section
                id="hero"
                className="max-w-4xl pl-4 mx-auto flex relative pb-12"
            >
                <div className="md:w-1/2 md:flex-1 absolute md:relative z-10 self-end md:self-center text-white">
                    <h1 className="space-mono font-bold text-3xl lg:text-4xl md:leading-relaxed">
                        Robert is a software engineer in California that mostly
                        focuses on the front-end of the web.
                    </h1>
                    <hr className="w-1/4 mt-4 mb-4" />
                    <p className="mb-4">
                        I engineer beatiful websites that are fast, functional
                        and accessible to everyone.
                    </p>
                </div>
                <div className="md:w-1/2 md:flex-1 pl-8 md:pl-0">
                    <StaticImage
                        placeholder="dominantColor"
                        alt="Robert Hogan's Portrait Image"
                        src="https://res.cloudinary.com/dmfdjwwgb/image/upload/v1630950348/robertshogan.com/J_R___T_8.21.21-31_copy_k9zia3.jpg"
                        height={1024}
                    />
                </div>
            </section>
            <section id="featured-projects" className="max-w-7xl mx-auto">
                <h2 className="text-sm font-thin uppercase text-white pl-4">
                    Featured Projects &mdash;
                </h2>
                <div className="flex flex-wrap md:space-x-2 px-4">
                    <ProjectCard
                        projectName="API Pagination"
                        react="true"
                        typescript="true"
                        css="true"
                        git="https://github.com/robert-s-hogan/react-query-pagination-assessment"
                        url="https://robert-s-hogan.github.io/react-query-pagination-assessment/"
                        projectDescription=" This project consumes a 3rd party API and creates pagination to view all entries."
                    ></ProjectCard>
                    <ProjectCard
                        projectName="Game of Memory"
                        javascript="true"
                        css="true"
                        git="https://github.com/robert-s-hogan/Project-Memory-Game"
                        url="https://robert-s-hogan.github.io/Project-Memory-Game/"
                        projectDescription="This project was made with Vanilla JavaScript and designed assets."
                    ></ProjectCard>
                    <ProjectCard
                        projectName="Coffee Shop"
                        react="true"
                        gatsby="true"
                        netlify="true"
                        git="https://github.com/robert-s-hogan/gatsby-coffee-shop"
                        url="https://local-coffee-shop-gatsby-tailwind.netlify.app/"
                        tailwindcss="true"
                        projectDescription="Generic coffee shop template using TailwindCSS, Gatsby hosted on Netlify."
                    ></ProjectCard>
                    <ProjectCard
                        projectName="Other Projects"
                        url="/other-projects"
                        code="true"
                        projectDescription="Various projects and tutorials using different technologies."
                        buttonTitle="View Projects"
                    ></ProjectCard>
                </div>
            </section>
            <section
                id="posts"
                className="max-w-7xl mx-auto text-white dark:text-black pl-4 mt-8 "
            >
                <h2 className="text-sm font-thin uppercase text-white mb-2">
                    Writing &mdash;
                </h2>
                <div className="text-white flex">
                    {posts.map(post => (
                        <div
                            key={post.node.id}
                            id={post.node.id}
                            className="w-1/3 border p-4 mr-2"
                        >
                            <p className="text-xs text-gray-400 mb-2">
                                {post.node.author._createdAt}
                            </p>
                            <Link
                                to={`https://www.robert.dev/{post.node.slug.current}`}
                            >
                                <h3 className="text-xl">{post.node.title}</h3>
                            </Link>
                            {/* <p className="text-lg">{post.node.children.body}</p> */}
                        </div>
                    ))}
                </div>
            </section>
        </Layout>
    );
}
