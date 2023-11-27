import React from "react";
import ProductCard from '../Store/ProductCard'

export default function PreviouslyViewed(){
    return(
        <div>
                <h1 className="text-4xl font-semibold mt-1">Previously Viewed</h1>
                <div className="flex flex-wrap mt-3 mb-2">
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                </div>
        </div>
    )
}