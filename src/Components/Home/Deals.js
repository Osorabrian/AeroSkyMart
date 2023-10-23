import React from 'react'
import ProductCard from '../Store/ProductCard'

export default function Deals(){
    return(
        <>
            <h1 className='text-4xl font-semibold'>Hot Deals</h1>

            <div className='flex flex-grow mt-5'>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </div>
        </>
    )
}