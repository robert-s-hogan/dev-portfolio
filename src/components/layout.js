import * as React from "react";
import { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link, useStaticQuery, graphql } from "gatsby";
import { Seo } from "./seo.js";

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
        <div className="bg-black">
            <Seo
                title={title}
                description={description}
                image={image}
                path={path}
            />
            <header className="flex justify-between text-white p-4 text-2xl max-w-4xl mx-auto">
                <Link to="/">
                    <div className="flex items-center justify-center">
                        <p className="uppercase text-2xl font-bold tracking-widest">
                            RH
                        </p>
                        {/* <StaticImage
                            src="../images/RH_logo_black.png"
                            alt="Logo"
                            placeholder="dominantColor"
                            width={48}
                            height={48}
                        /> */}
                    </div>
                </Link>
                <nav role="navigation">
                    <div>
                        <button
                            id="nav_toggle"
                            className="text-white"
                            className="h-full w-full lg:hidden"
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
                            className={`w-full lg:flex lg:w-auto lg:py-0 lg:items-center ${
                                navbarOpen ? "open" : "hidden"
                            }`}
                        >
                            <Link to="/about">About</Link>
                        </div>
                    }
                </nav>
            </header>
            <main className="max-w-4xl my-2 mx-auto pl-4 md:px-4">
                {children}
            </main>
        </div>
    );
}

export default Layout;
