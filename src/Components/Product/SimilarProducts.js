import React from "react";
import ProductCard from '../Store/ProductCard'

export default function SimilarProducts(){
    return(
            <div>
                <h1 className="text-4xl font-semibold mt-3">Similar Products</h1>
                <div className="flex flex-wrap my-3">
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                </div>
            </div>
    )
}