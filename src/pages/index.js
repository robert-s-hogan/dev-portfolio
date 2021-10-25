import * as React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout.js";
import ProjectCard from "../components/project-card.js";

export default function IndexPage() {
    const data = useStaticQuery(graphql`
        query ProjectData {
            allSanityProject {
                nodes {
                    id
                    description
                    repoUrl
                    title
                    url
                    techUsed {
                        id
                        description
                        title
                        imageUrl
                    }
                }
            }
        }
    `);
    const projects = data.allSanityProject.nodes;
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
                    {projects.map(project => (
                        <ProjectCard
                            key={project.id}
                            projectName={project.title}
                            techUsed={project.techUsed}
                            git={project.repoUrl}
                            url={project.url}
                            projectDescription={project.description}
                        />
                    ))}
                    <div className="flex flex-col w-full md:flex-1 bg-cover bg-center md:mx-auto md:bg-contain md:bg-black justify-center text-white px-4 py-8 md:px-8 border border my-2">
                        <div className="flex justify-end mb-2">
                            <Link to="/projects" className="self-center mb-4">
                                <StaticImage
                                    src="../images/all_projects.svg"
                                    alt="Dashboard Icon"
                                    className="self-center mr-2 mb-1"
                                    height={20}
                                />
                            </Link>
                        </div>

                        <h2 className="text-2xl uppercase">Other Projects</h2>
                        <p className="text-sm py-4">
                            Various projects and tutorials using different
                            technologies.
                        </p>

                        <div className="flex justify-start mb-2 content-center">
                            <div className="mr-2">
                                <StaticImage
                                    height={20}
                                    alt="CSS3 Logo"
                                    src="../images/code.svg"
                                />
                            </div>
                        </div>

                        <div className="mt-4">
                            <Link to="/projects">
                                <button className="bg-transparent hover:bg-white hover:text-black py-2 px-4 border-2 transition duration-300 ease-in-out">
                                    Live Project
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            {/* <section
                id="posts"
                className="max-w-7xl mx-auto text-white dark:text-black pl-4 mt-8 "
            >
                <h2 className="text-sm font-thin uppercase text-white mb-2">
                    Writing &mdash;
                </h2>
                <div className="text-white flex">
                    {posts.map(post => (
                        <div
                            key={post.id}
                            id={post.id}
                            className="w-1/3 border p-4 mr-2"
                        >
                            <Link to={post.slug.current}>
                                <WritingCategories
                                    categoryData={post.categories}
                                />

                                <h3 className="text-xl">{post.title}</h3>
                                <WritingBody bodyData={post.body} />
                            </Link>
                        </div>
                    ))}
                </div>
            </section> */}
        </Layout>
    );
}
