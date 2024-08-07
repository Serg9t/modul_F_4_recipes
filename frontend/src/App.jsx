import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import axios from 'axios';

import Home from "./pages/Home";
import Layout from "./components/Layout";
import About from "./pages/About";
import NotFoundPage from "./pages/NotFoundPage";
import Category from "./pages/Category";
import RecipePage from "./pages/RecipePage";
import CategoryDishes from "./pages/CategoryDishes";

function App() {

    const [dishes, setDishes] = useState([])
    const [search, setSearch] = useState("");
    const [searchResalt, setSearchResalt] = useState([])

    useEffect(() => {
        const getDishes = async () => {
            try {
                const response = await axios.get("http://127.0.0.1:8000/api/dishes/")
                setDishes(response.data)
            } catch (error) {
                if (error.response) {
                    console.log(error.response.data)
                    console.log(error.response.status)
                } else {
                    console.log(`Error: ${error.message}`)
                }
            }
        }

        getDishes()

    }, [])

    useEffect(() => {
        const filterDishes = dishes.filter(dish =>
            ((dish.title).toLowerCase()).includes(search.toLowerCase())
            || ((dish.recipe).toLowerCase()).includes(search.toLowerCase())
        )

        setSearchResalt(filterDishes)
    }, [dishes, search])


    return (
        <>
            {/* <SwaggerUI url="https://petstore.swagger.io/v2/swagger.json" /> */}

            <Routes>
                <Route path="/" element={<Layout
                    search={search}
                    setSearch={setSearch}
                />}>
                    <Route index element={<Home dishes={searchResalt} />} />
                    <Route path=":id/recipe" element={<RecipePage dishes={dishes} />} />
                    <Route path="category" element={<Category />} />
                    <Route path=":id/category" element={<CategoryDishes />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<NotFoundPage />} />

                </Route>
            </Routes>
        </>

    )
}

export default App
