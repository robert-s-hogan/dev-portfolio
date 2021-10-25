import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

export default function ProjectCard({
    children,
    projectName,
    projectDescription,
    git,
    url,
    code,
    buttonTitle,
    techUsed,
}) {
    return (
        <div className="flex flex-col w-full md:flex-1 bg-cover bg-center md:mx-auto md:bg-contain md:bg-black justify-center text-white px-4 py-8 md:px-8 border border my-2">
            <div className={`flex justify-end ${git ? "" : "mb-2"}`}>
                <a href={git} className="self-center mb-4">
                    {git ? (
                        <img
                            src="https://img.icons8.com/material-outlined/36/FFFFFF/github.png"
                            alt="Github Logo"
                            className="self-center pr-2"
                        />
                    ) : (
                        <StaticImage
                            src="../images/all_projects.svg"
                            alt="Dashboard Icon"
                            className="self-center mr-2 mb-1"
                            height={20}
                        />
                    )}
                </a>
            </div>

            <h2 className="text-2xl uppercase">{projectName}</h2>
            <p className="text-sm py-4">{projectDescription}</p>

            <div className="flex justify-start mb-2 content-center">
                {techUsed.map(tech => (
                    <div className="mr-2" key={tech.id}>
                        <img
                            alt={tech.description}
                            className="h-8"
                            placeholder="dominantColor"
                            src={tech.imageUrl}
                        />
                    </div>
                ))}
                {/* {tech.title ? 'React' && (
                        <div className="mr-2">
                            <StaticImage
                                alt="React Logo"
                                height={48}
                                placeholder="dominantColor"
                                src="../images/react-logo.svg"
                            />
                        </div>
                    )}
                    {gatsby && (
                        <div className="mr-2">
                            <StaticImage
                                alt="Gatsby Logo"
                                placeholder="dominantColor"
                                src="../images/Gatsby_Monogram.svg"
                                height={22}
                            />
                        </div>
                    )}
                    {typescript && (
                        <div className="mr-2">
                            <StaticImage
                                height={22}
                                alt="Typescript Logo"
                                src="../images/typescriptlang-icon.svg"
                            />
                        </div>
                    )}
                    {javascript && (
                        <div className="mr-2">
                            <StaticImage
                                height={22}
                                alt="JavaScript Logo"
                                src="../images/javascript_logo.svg"
                            />
                        </div>
                    )}
                    {tailwindcss && (
                        <div className="mr-2">
                            <StaticImage
                                height={22}
                                alt="TailwindCSS Logo"
                                src="../images/tailwindcss_logo.svg"
                            />
                        </div>
                    )}
                    {css && (
                        <div className="mr-2">
                            <StaticImage
                                height={22}
                                alt="CSS3 Logo"
                                src="../images/css_logo.svg"
                            />
                        </div>
                    )}
                    {netlify && (
                        <div className="mr-2">
                            <StaticImage
                                height={20}
                                alt="CSS3 Logo"
                                src="../images/netlify_logo.svg"
                            />
                        </div>
                    )}
                    {code && (
                        <div className="mr-2">
                            <StaticImage
                                height={20}
                                alt="CSS3 Logo"
                                src="../images/code.svg"
                            />
                        </div>
                    )} */}
            </div>

            {url && (
                <div className="mt-4">
                    <a href={url}>
                        <button className="bg-transparent hover:bg-white hover:text-black py-2 px-4 border-2 transition duration-300 ease-in-out">
                            {buttonTitle ? buttonTitle : "Live Project"}
                        </button>
                    </a>
                </div>
            )}

            {/* <Link to="/">&larr; back</Link> */}
        </div>
    );
}
