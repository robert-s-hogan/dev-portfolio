import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link, useStaticQuery, graphql } from "gatsby";

import { Seo } from "./seo.js";
import Hamburger from "./hamburger.js";

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

    const activeSide =
        "bg-gray-800 h-screen w-60 transform transition-all fixed duration-700 text-white flex justify-center p-2";
    const hiddenSide =
        "bg-gray-800 h-screen w-60 transform transition-all fixed duration-700 text-white flex justify-center p-2 -translate-y-full";

    return (
        <div className="bg-gray-900">
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
                    </div>
                </Link>
                <nav role="navigation" className="z-50">
                    <Hamburger
                        id="nav_toggle"
                        aria-label="Mobile Navigation"
                        navbarOpen={navbarOpen}
                        setNavbarOpen={setNavbarOpen}
                    />
                </nav>
                {
                    <div
                        // ref={tl}
                        id="nav_content"
                        className={`h-full w-full fixed right-0 bg-white -mt-4 z-20 overflow-hidden flex flex-col justify-center w-auto py-0 items-center ${
                            navbarOpen ? activeSide : hiddenSide
                        }`}
                    >
                        <Link
                            to="/"
                            className="font-bold py-3 text-4xl text-black"
                        >
                            Home
                        </Link>
                        <Link
                            to="/about"
                            className="font-bold py-3 text-4xl text-black"
                        >
                            About
                        </Link>
                    </div>
                }
            </header>
            <main className="max-w-4xl my-2 mx-auto pl-4 md:px-4">
                {children}
            </main>
        </div>
    );
}

export default Layout;
