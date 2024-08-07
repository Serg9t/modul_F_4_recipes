import axios from "axios";
import React, { useEffect, useState } from "react";
import CategorySelect from "../components/CategorySelect";

const Category = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        const getCategories = async () => {
            try {

                const response = await axios.get("http://127.0.0.1:8000/api/categories/")
                setCategories(response.data)

            } catch (error) {
                if (error.response) {
                    console.log(error.response.data)
                    console.log(error.response.status)
                } else {
                    console.log(`Error: ${error.message}`)
                }
            }
        }

        getCategories()


    }, [])

    return (
        <div className="category">
            <h2 className="title">Выберите категорию</h2>
            {categories.map((category) => (
                <CategorySelect key={category.id} category={category} />
            ))}
        </div>
    )
}

export default Category