import React from "react";
import {FcFilledFilter} from 'react-icons/fc'

export default function Store(){

    return(
        <>
            <div className="row">
                <h1 className="text-4xl mt-3 col-6">Our Products</h1>
                <FcFilledFilter className="col-3"/>
                <p className="col-3">Filter</p>
            </div>
        </>
    )
}