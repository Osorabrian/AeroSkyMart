import React from "react";
import ProductCard from '../Store/ProductCard'

export default function SimilarProducts(){
    return(
            <div>
                <h1 className="text-4xl font-semibold mt-4">Similar Products</h1>
                <div className="flex flex-wrap mt-3 mb-2">
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                </div>
            </div>
    )
}