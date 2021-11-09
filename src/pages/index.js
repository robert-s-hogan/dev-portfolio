import * as React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout.js";
import ProjectCard from "../components/project-card.js";
import Posts from "../components/posts.js";

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
                    <p className="text-xl font-light">
                        Hello, I am Robert Hogan
                    </p>
                    <h1 className="space-mono text-3xl font-light lg:text-5xl md:leading-relaxed">
                        <span className="font-bold">Front End Developer</span>{" "}
                        and <span className="font-bold">UI/UX Engineer</span>
                    </h1>
                    <hr className="w-1/4 mt-4 mb-4" />
                    <p className="mb-4 hidden md:block font-light">
                        I engineer beatiful websites that are fast, functional
                        and accessible to everyone.
                    </p>
                    <div className="flex content-center mb-2 md:mb-12 space-x-4">
                        <a
                            href="https://www.linkedin.com/in/robert-s-hogan/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <StaticImage
                                src="../images/linkedin.png"
                                alt="LinkedIn Logo"
                                className="text-white"
                                height={24}
                            />
                        </a>
                        <a href="mailto:robert.s.hogan@icloud.com?subject=Contact Section: Inquiry">
                            <StaticImage
                                alt="email icon"
                                className="mt-0.5"
                                placeholder="dominantColor"
                                src="../images/email_icon.svg"
                                height={24}
                            />
                        </a>
                    </div>
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
            <section id="featured-projects" className="max-w-4xl mx-auto">
                <h2 className="text-sm font-thin uppercase text-white pl-4">
                    Featured Projects &mdash;
                </h2>
                <div className="flex flex-wrap md:space-x-2 px-4 md:pr-0">
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
                    {/* <div className="flex flex-col w-full md:flex-1 bg-cover bg-center md:mx-auto md:bg-contain md:bg-black justify-center text-white px-4 py-8 md:px-8 border border my-2">
                        <div className="flex justify-end mb-2">
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://github.com/robert-s-hogan"
                                className="self-center mb-4"
                            >
                                <img
                                    src="https://img.icons8.com/material-outlined/36/FFFFFF/github.png"
                                    alt="Github Logo"
                                    className="self-center pr-2"
                                />
                            </a>
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
                                    All Projects{" "}
                                </button>
                            </Link>
                        </div>
                    </div> */}
                </div>
            </section>
            <section
                id="about"
                className="max-w-4xl mx-auto pl-4 text-white mt-12 mb-4"
            >
                <h2 className="text-sm font-thin uppercase mb-2">
                    About Me &mdash;
                </h2>
                <p>
                    I enjoy turning complex problems into simple, beautiful and
                    intuitive designs. When I'm not pushing pixels, you'll find
                    me gaming, watching football(and futbol) or hanging out with
                    my family.
                </p>
            </section>
            {/* <Posts /> */}
            <section id="contact" className="max-w-4xl mx-auto pl-4 mt-12">
                <h2 className="text-sm font-thin uppercase text-white mb-2">
                    Contact &mdash;
                </h2>
                <div className="flex content-center md:mb-12 space-x-4">
                    <a href="mailto:robert.s.hogan@icloud.com?subject=Contact Section: Inquiry">
                        <StaticImage
                            alt="email icon"
                            placeholder="dominantColor"
                            src="../images/email_icon.svg"
                            height={24}
                        />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/robert-s-hogan/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <StaticImage
                            src="../images/linkedin.png"
                            alt="LinkedIn Logo"
                            className="text-white mb-8"
                            height={24}
                        />
                    </a>
                </div>
            </section>
        </Layout>
    );
}
