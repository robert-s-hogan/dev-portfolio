import * as React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout.js";
import ProjectCard from "../components/project-card.js";
// import WritingCategories from "../components/writing-categories.js";
// import WritingBody from "../components/writing-body.js";

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
                            // data={project}
                            key={project.id}
                            projectName={project.title}
                            techUsed={project.techUsed}
                            git={project.repoUrl}
                            url={project.url}
                            projectDescription={project.description}
                        />
                    ))}
                    {/* <ProjectCard
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
                    ></ProjectCard> */}
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
