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
            <div className="flex relative pb-12">
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
                <div className="md:w-1/2 md:flex-1 pl-8">
                    <StaticImage
                        placeholder="dominantColor"
                        alt="Robert Hogan's Portrait Image"
                        src="https://res.cloudinary.com/dmfdjwwgb/image/upload/e_auto_brightness:-25,e_contrast:-25/e_brightness:-15/v1630950348/robertshogan.com/J_R___T_8.21.21-31_copy_k9zia3.jpg"
                        height={1024}
                    />
                </div>
            </div>
        </Layout>
    );
}
