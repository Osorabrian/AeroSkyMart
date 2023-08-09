import React from "react";
import ProductCard from './ProductCard'

export default function Store(){

    return(
        <>
            <div className=" mt-3">
                <h1 className="text-4xl">Our Products</h1>
                <p className="text-right me-3"><i class="fa-solid fa-filter mt-3" style={{color: "#e96f0c"}}></i>   Filter Products</p>
            </div>
            <div className="row mx-auto mt-4">
                <ProductCard />
                <ProductCard />
            </div>
        </>
    )
}