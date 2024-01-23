import React from "react";
import './directory.style.scss';
import CategoryItem from "../category-item/category-item.component";

const Directory = ({categories}) => {
    return (
        // to contain all the 5 categories -> Destructuring
        <div className="categories-container">
            {categories.map((category) => (
                <CategoryItem key={category.id} category={category}></CategoryItem>
            ))}
        </div >
    )
}

export default Directory;