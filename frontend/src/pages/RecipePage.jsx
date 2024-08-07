import React from "react";
import { useParams, Link } from "react-router-dom";

const RecipePage = ({ dishes }) => {
    const {id} = useParams()

    const dish = dishes.find(dish => (dish.id).toString() === id)

    return (
        <main className="recipePage">
            <article className="recipe">
                {dish &&
                    <>
                        <h2>{dish.title}</h2>
                        <p className="recipeBody">
                            {dish.recipe}
                        </p>
                    </>
                } {!dish &&
                    <>
                        <h2>Recipe not found</h2>
                        <p>Well... Thet's dissapoint...</p>
                        <p>
                            <Link to="/">Visit on our page</Link>
                        </p>
                    </>
                } 
            </article>
        </main>
    )
}

export default RecipePage