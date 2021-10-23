import * as React from "react";

export default function WritingCategories({ categoryData }) {
    const categories = categoryData;
    return (
        <>
            {categories.map(category => (
                <p key={category.id} className="text-xs text-gray-400 mb-2">
                    {category.title}
                </p>
            ))}
        </>
    );
}
