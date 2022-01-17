import * as React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import PortableText from "@sanity/block-content-to-react";

export default function Posts({ title, description }) {
    const data = useStaticQuery(graphql`
        query PostData {
            allSanityPost(sort: { fields: [publishedAt], order: DESC }) {
                nodes {
                    authors {
                        _key
                        _type
                        _rawAuthor
                    }
                    publishedAt(formatString: "MMM DD, YY")
                    title
                    slug {
                        current
                    }
                    body {
                        style
                        list
                        children {
                            text
                            marks
                        }
                    }
                    id
                    mainImage {
                        asset {
                            path
                        }
                    }
                }
            }
        }
    `);
    const posts = data.allSanityPost.nodes;
    const featuredPosts = posts.slice(0, 3);

    return (
        <section
            id="writing"
            className="max-w-4xl mx-auto text-white dark:text-black pl-4 mt-8 "
        >
            <h2 className="text-sm font-thin uppercase text-white mb-2">
                Writing &mdash;
            </h2>
            <p className="text-white mb-4">
                An open collection of notes, resources, workshops, courses, and
                explorations into new technologies.
            </p>
            <div className="flex bg-black">
                {featuredPosts.map(post => (
                    <div
                        key={post.id}
                        id={post.id}
                        className="w-1/3 border p-4 mr-2"
                    >
                        {/* <img
                            src={`https://cdn.sanity.io/${post.mainImage.asset.path}`}
                            className="object-fill w-full h-24 pb-4 mx-auto"
                        /> */}
                        <p className="text-white">{post.title}</p>
                        <p className="text-gray-500 text-xs">
                            {post.publishedAt}
                        </p>
                        <p className="my-4 text-white">{post.excerpt}</p>
                        <Link
                            to={`/post/${post.slug.current}`}
                            className="text-white hover:bg-white hover:p-4 hover:text-black transition duration-300 ease-in-out"
                        >
                            Read More
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
}
