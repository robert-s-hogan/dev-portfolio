export default {
    name: "techUsed",
    title: "Tech Used",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Technology",
            type: "string",
        },
        {
            name: "imageUrl",
            title: "Image Url",
            type: "string",
        },
        {
            name: "mainImage",
            title: "Logo",
            type: "image",
            options: {
                hotspot: true,
            },
        },
        {
            name: "description",
            title: "Description",
            type: "text",
        },
    ],
};
