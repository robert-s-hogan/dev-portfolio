import * as React from "react";

export default function WritingBody({ bodyData }) {
    const bodies = bodyData;
    console.log(bodies);
    return (
        <>
            {bodies.map(body => (
                <p className="text-white mb-2">{body.text}</p>
            ))}
        </>
    );
}
