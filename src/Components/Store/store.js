import React from "react";
import ProductCard from './ProductCard'
import './store.css'

export default function Store(){

    return(
        <div className="font-lato">
            <div className=" mt-3">
                <h1 className="text-4xl">Our Products</h1>
            </div>
             
            <div className="row mt-3 mb-3" id='search-row'>
                <div className="row ms-auto" id='search-bar'>
                    <input placeholder="Search" type="text" className="form-control w-50 rounded-0 col-9 ms-11" id='search'/>
                    <p className="text-right col-3"><i className="fa-solid fa-filter mt-3" style={{color: "#e96f0c"}}></i>   Filter</p>
                </div>
            </div>

            <div className="row mx-auto" id='cards'>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>

        </div>
    )
}