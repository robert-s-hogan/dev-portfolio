export default {
    name: "project",
    title: "Project",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Project Title",
            type: "string",
        },
        {
            name: "imageUrl",
            title: "Image Url",
            type: "string",
        },
        {
            name: "mainImage",
            title: "Main image",
            type: "image",
            options: {
                hotspot: true,
            },
        },
        {
            name: "url",
            title: "Live URL",
            type: "string",
        },
        {
            name: "description",
            title: "Project Description",
            type: "text",
        },
        {
            name: "techUsed",
            title: "Tech Used",
            type: "array",
            of: [{ type: "reference", to: { type: "techUsed" } }],
        },
        {
            name: "repoUrl",
            title: "Repo URL",
            type: "string",
        },
        {
            name: "publishedAt",
            title: "Published at",
            type: "datetime",
        },
    ],

    preview: {
        select: {
            title: "title",
            media: "mainImage",
        },
        prepare(selection) {
            const { author } = selection;
            return Object.assign({}, selection, {
                subtitle: author && `by ${author}`,
            });
        },
    },
};
