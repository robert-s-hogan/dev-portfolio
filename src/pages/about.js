import * as React from "react";
import { Link, graphql } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { Layout } from "../components/layout.js";

export const query = graphql`
    query MyQuery {
        file(name: { eq: "icon" }) {
            childImageSharp {
                gatsbyImageData(placeholder: DOMINANT_COLOR)
            }
        }
    }
`;

export default function About({ data }) {
    return (
        <Layout
            title="About This Site"
            description="More information about this about page."
        >
            <GatsbyImage image={getImage(data.file)} alt="Gatsby Icon" />
            <h1>About This Site</h1>
            <Link to="/">Back to Home</Link>
        </Layout>
    );
}
