import React from "react";
import ProductCard from './ProductCard'
import './store.css'

export default function Store(){

    return(
        <>
            <div className=" mt-3">
                <h1 className="text-4xl">Our Products</h1>
            </div>
            
            <div className="row" id='search-row'>
                <input placeholder="Search" type="text" className="form-control w-40 rounded-0 col-9 ms-11"/>
                <p className="text-right me-3 col-4"><i className="fa-solid fa-filter mt-3" style={{color: "#e96f0c"}}></i>   Filter</p>
            </div>

            <div className="row mx-auto mt-4">
                <ProductCard />
                <ProductCard />
            </div>

        </>
    )
}