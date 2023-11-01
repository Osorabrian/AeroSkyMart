import React from "react";
import './home.css'
import merchandise from '../images/categories/merch.webp'
import simulator from '../images/categories/msfs.png'
import books from '../images/categories/dare.jpg'
import uniform from '../images/categories/uniform.webp'
import collectables from '../images/categories/collectables.webp'
import wall_decor from '../images/categories/wall decor.webp'

export default function Category(){

    const categories_images = {
        "Merchandise": merchandise,
        "Simulator": simulator,
        "Books": books,
        "Uniform": uniform,
        "Collectables":collectables,
        "Wall Decor": wall_decor
    }

    return(
        <div>

            <h1 className="text-4xl font-semibold mt-4 text-left m-2">Popular Categories</h1>

            <div className="flex flex-wrap mt-3">
                { Object.keys(categories_images).map((category) => {
                    return(
                        <div className="mx-auto mt-4 me-4 hover:shadow-lg rounded-md" key={category}>
                            <img src={categories_images[category]} alt={`${category} thumbnail`} className="category-image mx-auto"/>
                            <p className="mt-2">{category}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}