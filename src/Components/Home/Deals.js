import React from 'react'
import ProductCard from '../Store/ProductCard'

export default function Deals(){
    return(
        <>
            <h1 className='text-4xl font-semibold'>Hot Deals</h1>

            <div className='row mt-5 m-2'>
                <ProductCard/>
                <ProductCard/>
            </div>
        </>
    )
}