import * as React from "react";
import { Link } from "gatsby";
import { Layout } from "./layout.js";

export default function PostLayout(pageContext) {
    const { title, image, slug, publishedAt, techUsed, techUsedDescription } =
        pageContext.pageContext;
    console.log(pageContext.pageContext.text.body);
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
            </section>
        </Layout>
    );
}
