import React from "react";
import { Link } from "react-router-dom";

const Dish = ({ dish }) => {
    return (
        <article className="recipe">
            <Link to={`/${dish.id}/recipe`}>
                <h3>{dish.title}</h3>
            </Link>
            <p className="recipeBody">
                {
                    (dish.recipe).length <= 50 ? dish.recipe : `${(dish.recipe).slice(0, 80)}...`
                }
            </p>
        </article>
    )
}

export default Dish;