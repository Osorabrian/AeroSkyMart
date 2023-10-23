import React from "react";
import merchandise from '../images/categories/merch.webp'

export default function Category(){

    return(
        <div>
            <h1>Categories</h1>

            <div>
                <div>
                    <img src={merchandise} alt='merchandise' className="category-image"/>
                </div>

            </div>
        </div>
    )
}