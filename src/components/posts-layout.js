import * as React from "react";
import { Link } from "gatsby";
import { Layout } from "./layout.js";
import PortableText from "react-portable-text";

export default function PostLayout(pageContext, portableTextContent) {
    const {
        title,
        image,
        slug,
        publishedAt,
        techUsed,
        techUsedDescription,
        blogContent,
    } = pageContext.pageContext;
    return (
        <Layout>
            <section className="max-w-4xl pl-4 mx-auto flex flex-col pb-12">
                <p>
                    <Link className="text-white" to="/blog/">
                        &larr; back
                    </Link>
                </p>
                <div className="text-center">
                    <img
                        src={image}
                        className="object-cover max-h-48 mx-auto"
                    />
                    <h1 className="text-white">{title}</h1>
                    <p className="text-gray-700 text-xs lg:text-sm">
                        {publishedAt}
                    </p>
                </div>
                <PortableText
                    // Pass in block content straight from Sanity.io
                    content={blogContent}
                    // Optionally override marks, decorators, blocks, etc. in a flat
                    // structure without doing any gymnastics
                    serializers={{
                        h1: props => <h1 style={{ color: "red" }} {...props} />,
                        li: ({ children }) => (
                            <li className="special-list-item">{children}</li>
                        ),
                        someCustomType: PostLayout,
                    }}
                />
                <pre className="text-white">
                    {JSON.stringify(blogContent.body, null, 2)}
                </pre>
            </section>
        </Layout>
    );
}
