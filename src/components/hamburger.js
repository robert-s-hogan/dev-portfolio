import * as React from "react";
import { useState } from "react";

export default function IndexPage({ navbarOpen, setNavbarOpen }) {
    const hamburgerLine = `h-1 w-8 my-1 rounded-full bg-white transition ease transform duration-300`;

    return (
        <button
            id="nav_toggle"
            className="flex flex-col h-12 w-12 rounded justify-center items-center group bg-gray-900 md:hidden"
            onClick={() => setNavbarOpen(!navbarOpen)}
        >
            <div
                className={`${hamburgerLine} ${
                    navbarOpen
                        ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
                        : "opacity-50 group-hover:opacity-100"
                }`}
            />
            <div
                className={`${hamburgerLine} ${
                    navbarOpen
                        ? "opacity-0"
                        : "opacity-50 group-hover:opacity-100"
                }`}
            />
            <div
                className={`${hamburgerLine} ${
                    navbarOpen
                        ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
                        : "opacity-50 group-hover:opacity-100"
                }`}
            />
        </button>
    );
}
