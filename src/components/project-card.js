import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

export default function ProjectCard({
    children,
    bg,
    projectName,
    projectDescription,
    react,
    gatsby,
    tailwindcss,
    css,
    typescript,
    javascript,
}) {
    return (
        <div
            className="flex flex-col w-full md:flex-1 bg-cover bg-center md:mx-1 md:bg-contain md:bg-black justify-center text-white px-4 py-8 border my-8"
            style={{
                backgroundImage: `url(${bg})`,
                backgroundPosition: "contain",
                backgroundRepeat: "no-repeat",
                height: "400px",
            }}
        >
            <div className="flex justify-start mb-2 content-center">
                {gatsby && (
                    <div className="mr-2">
                        <StaticImage
                            placeholder="dominantColor"
                            src="../images/Gatsby_Monogram.svg"
                            height={22}
                        />
                    </div>
                )}
                {react && (
                    <div className="mr-2">
                        <StaticImage
                            height={48}
                            placeholder="dominantColor"
                            src="../images/react-logo.svg"
                        />
                    </div>
                )}
                {typescript && (
                    <div className="mr-2">
                        <StaticImage
                            height={22}
                            src="../images/typescriptlang-icon.svg"
                        />
                    </div>
                )}
            </div>
            <h2 className="text-2xl uppercase">{projectName}</h2>
            <p className="text-sm py-4">{projectDescription}</p>

            <div className="flex mt-4">
                <Link to="" className="self-center">
                    <img
                        src="https://img.icons8.com/material-outlined/36/FFFFFF/github.png"
                        className="self-center pr-2"
                    />
                </Link>
                <Link to="">
                    <button className="bg-transparent hover:bg-white hover:text-black py-2 px-4 border-2 transition duration-300 ease-in-out">
                        Live Project
                    </button>
                </Link>
            </div>

            {/* <Link to="/">&larr; back</Link> */}
        </div>
    );
}
