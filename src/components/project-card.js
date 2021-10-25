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
                    {git && (
                        <img
                            src="https://img.icons8.com/material-outlined/36/FFFFFF/github.png"
                            alt="Github Logo"
                            className="self-center pr-2"
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
