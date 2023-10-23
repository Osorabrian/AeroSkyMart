import React from "react";
import './home.css'
import merchandise from '../images/categories/merch.webp'
import simulator from '../images/msfs/msfs_cover.jpg'
import books from '../images/categories/books.webp'
import uniform from '../images/categories/uniform.webp'
import collectables from '../images/categories/collectables.webp'
import wall_decor from '../images/categories/wall decor.webp'

export default function Category(){

    const categories_images = [merchandise, simulator, books, uniform, collectables, wall_decor]

    return(
        <div className="mt-5">
            <h1>Categories</h1>

            <div className="row">
                { categories_images.map((category) => {
                    return(
                        <div className="col-2">
                            <img src={category} alt={`${category} thumbnail`} className="category-image"/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}