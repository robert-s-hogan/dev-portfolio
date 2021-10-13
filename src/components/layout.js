import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link, useStaticQuery, graphql } from "gatsby";
import { gsap } from "gsap";

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

    const mobileMenuRef = useRef();

    useEffect(() => {
        gsap.to(mobileMenuRef.current, { rotation: "+=360" });
    });

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
                            <StaticImage
                                src="../images/menu_open.png"
                                height={36}
                            />
                        </button>
                    </div>
                </nav>
                {
                    <div
                        ref={mobileMenuRef}
                        id="nav_content"
                        className={`w-full h-full fixed bg-black z-50 overflow-hidden flex flex-col w-auto py-0 justify-center items-center ${
                            navbarOpen ? "open" : "hidden"
                        }`}
                    >
                        <button
                            className="absolute top-0 right-8 text-3xl"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <StaticImage
                                src="../images/mobile_delete.png"
                                height={36}
                            />
                        </button>
                        <Link to="/about">About</Link>
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
