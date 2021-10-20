import * as React from "react";
import { useState } from "react";
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
        <div className="bg-gray-900 dark:bg-white">
            <Seo
                title={title}
                description={description}
                image={image}
                path={path}
            />
            <header className="flex justify-between text-white p-4 lg:px-0 text-2xl max-w-4xl mx-auto">
                <Link to="/">
                    <div className="flex items-center justify-center">
                        <p className="uppercase text-2xl font-bold tracking-widest">
                            RH
                        </p>
                    </div>
                </Link>
                <nav role="navigation" className="z-50 flex">
                    {/* <button className="mr-8" id="switchTheme">
                        DarkLight
                    </button> */}
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
                        className={`h-full w-full fixed right-0 bg-white -mt-4 z-20 overflow-hidden flex flex-col justify-center w-auto py-0 items-center md:visible ${
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
                <div className="hidden md:block">
                    <ul className="md:flex">
                        <li>
                            <Link
                                to="#projects"
                                className="pr-3 uppercase text-white text-sm inline-block align-middle"
                            >
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="#about"
                                className="pr-3 lg:pr-0 uppercase text-white text-sm inline-block align-middle"
                            >
                                About
                            </Link>
                        </li>
                    </ul>
                </div>
            </header>
            <main className="mx-auto mb-8">{children}</main>
            <footer className="mx-auto font-thin text-white max-w-7xl pl-4">
                <section id="contact" className="max-w-7xl mx-auto">
                    <h2 className="text-sm font-normal uppercase text-white mb-4">
                        Contact &mdash;
                    </h2>
                    <div className="flex content-center mb-12 space-x-4">
                        <a href="mailto:robert@robertshogan.com?subject=Contact Section: Inquiry">
                            <StaticImage
                                placeholder="dominantColor"
                                src="../images/email_icon.svg"
                                height={24}
                            />
                        </a>
                        <a href="https://www.linkedin.com">
                            <StaticImage
                                src="../images/linkedin.png"
                                alt="LinkedIn Logo"
                                className="text-white mb-8"
                                height={24}
                            />
                        </a>
                        <a href="https://www.linkedin.com">
                            <StaticImage
                                src="../images/twitter_logo.svg"
                                alt="LinkedIn Logo"
                                className="text-white mb-8"
                                height={24}
                            />
                        </a>
                    </div>
                </section>
                &copy; 2021 Robert Hogan
            </footer>
        </div>
    );
}

export default Layout;
