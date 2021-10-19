import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout.js";
import ProjectCard from "../components/project-card.js";

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
            # allSanityEpisode(sort: { fields: date, order: DESC }, limit: 20) {
            #     nodes {
            #         id
            #         title
            #         guest {
            #             name
            #         }
            #         gatsbyPath(
            #             filePath: "/episode/{SanityEpisode.slug__current}"
            #         )
            #     }
            # }
        }
    `);
    // const posts = data.allMdx.nodes;
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
                    {/* <h1 className="text-xl font-light mt-8">
                        I'm a <span class="font-bold">software engineer</span>{" "}
                        in{" "}
                        <span class="font-bold  bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200">
                            California
                        </span>
                        . I mostly focus on the{" "}
                        <span class="font-bold  bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200">
                            front-end
                        </span>{" "}
                        of the web.
                    </h1> */}
                    <hr className="w-1/4 mt-4 mb-4" />
                    <p className="mb-4">
                        I craft beatiful websites that are fast, functional and
                        accessible to everyone.
                    </p>
                    <StaticImage
                        src="../images/linkedin.png"
                        alt="LinkedIn Logo"
                        className="text-white mb-8"
                        height={24}
                    />
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
                <h2 className="text-2xl text-center text-white">
                    Featured Projects
                </h2>
                <div className="flex flex-wrap">
                    <ProjectCard
                        projectName="3rd Party API Pagination"
                        react="true"
                        typescript="true"
                        css="true"
                        projectDescription=" This project consumes a free API and creates pagination to view all entries."
                    ></ProjectCard>
                    <ProjectCard
                        projectName="Concentration: A Game of Memory"
                        javascript="true"
                        css="true"
                        projectDescription=" This project was made with Vanilla JavaScript and designed assets."
                    ></ProjectCard>
                    <ProjectCard
                        projectName="Coffee Shop Template"
                        react="true"
                        gatsby="true"
                        tailwindcss="true"
                        projectDescription=" Sample coffee shop template using TailwindCSS, Gatsby, and hosted on Netlify."
                    ></ProjectCard>
                </div>
            </section>
        </Layout>
    );
}
