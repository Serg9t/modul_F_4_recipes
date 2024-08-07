import React from "react";
import Dish from "./Dish";

const DishesList = ({dishes}) => {
    return (
        <>
            {dishes.map((dish) => (
                <Dish key={dish.id} dish={dish} />
            ))}
        </>
    )
}

export default DishesList;