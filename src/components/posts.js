import * as React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import BlockContent from "@sanity/block-content-to-react";

const client = require("@sanity/client")({
    projectId: "cruda0lx",
    dataset: "production",
    apiVersion: "2021-03-25",
    useCdn: true,
});

const serializers = {
    types: {
        code: props => (
            <pre data-language={props.node.language}>
                <code>{props.node.code}</code>
            </pre>
        ),
    },
};

export default function Posts() {
    const data = useStaticQuery(graphql`
        query PostData {
            allSanityPost {
                nodes {
                    author {
                        id
                    }
                    publishedAt
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
                    categories {
                        description
                        title
                    }
                }
            }
        }
    `);
    const posts = data.allSanityPost.nodes;

    return (
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
                        key={post.id}
                        id={post.id}
                        className="w-1/3 border p-4 mr-2"
                    >
                        <p>{post.title}</p>
                        <p className="text-gray-200 text-xs">
                            {post.author.name}
                        </p>
                        <BlockContent
                            blocks={post.body}
                            serializers={serializers}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
