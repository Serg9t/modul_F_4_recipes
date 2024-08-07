import React from "react";
import { Link } from "react-router-dom";

const CategorySelect = ({ category }) => {

    const id = category.id

    return (
        <div>
            <Link to={`/${id}/category`}>
                <h3 className="categoryName">{category.name}</h3>
            </Link>

        </div>
    )
}

export default CategorySelect