import * as React from "react";
import { useState } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { Seo } from "./seo.js";

import { content } from "../styles/layout.module.css";
import "../styles/global.css";

export function Layout({
    children,
    title = false,
    description = false,
    image = false,
    path = false,
}) {
    const data = useStaticQuery(graphql`
        query GetSiteTitle {
            site {
                siteMetadata {
                    title
                    description
                    image
                    siteUrl
                }
            }
        }
    `);

    const meta = data?.site?.siteMetadata ?? {};

    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <>
            <Seo
                title={title}
                description={description}
                image={image}
                path={path}
            />
            <header className="flex justify-between text-white bg-gray-700 p-4 text-2xl">
                <Link to="/">{meta.title}</Link>
                <nav role="navigation">
                    <div>
                        <button
                            id="nav_toggle"
                            className="text-white"
                            className="h-full w-full"
                            aria-label="Mobile Navigation"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <svg
                                className="h-full w-auto"
                                xmlns="http://www.w3.org/2000/svg"
                                width="36"
                                height="36"
                                fill="#4B5563"
                                viewBox="0 0 256 256"
                            >
                                <rect
                                    width="256"
                                    height="256"
                                    fill="none"
                                ></rect>
                                <line
                                    x1="40"
                                    y1="128"
                                    x2="216"
                                    y2="128"
                                    stroke="#4B5563"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="16"
                                ></line>
                                <line
                                    x1="40"
                                    y1="64"
                                    x2="216"
                                    y2="64"
                                    stroke="#4B5563"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="16"
                                ></line>
                                <line
                                    x1="40"
                                    y1="192"
                                    x2="216"
                                    y2="192"
                                    stroke="#4B5563"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="16"
                                ></line>
                            </svg>
                        </button>
                    </div>
                    {
                        <div
                            id="nav_content"
                            className={`w-full py-8 lg:flex lg:w-auto lg:py-0 lg:items-center rounded-br-full shadow-md lg:shadow-none bg-yellow-50 ${
                                navbarOpen ? "open" : ""
                            }`}
                        >
                            <Link to="/about">About</Link>
                        </div>
                    }
                </nav>
            </header>
            <main className={content}>{children}</main>
        </>
    );
}

export default Layout;
