import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Dish from "../components/Dish";

const CategoryDishes = () => {

    const [categoryName, setCategoryName] = useState("")
    const [categoryDishes, setCategoryDishes] = useState([])

    const { id } = useParams()

    useEffect(() => {
        const getCategoryDishes = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/category/${id}/`)
                const category = await axios.get(`http://127.0.0.1:8000/api/categories/${id}/`)
                setCategoryName(category.data.name)

                setCategoryDishes(response.data)

            } catch (error) {
                if (error.response) {
                    console.log(error.response.data)
                    console.log(error.response.status)
                } else {
                    console.log(`Error: ${error.message}`)
                }
            }
        }

        getCategoryDishes()

    }, [])


    return (
        <div className="home">
            <h2 className="title">{categoryName}</h2>
            {categoryDishes.map((dish) => (
                <Dish key={dish.id} dish={dish} />
 
            ))}
        </div>
    )
}

export default CategoryDishes
