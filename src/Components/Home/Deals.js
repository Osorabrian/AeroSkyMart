import React from 'react'
import {Link} from 'react-router-dom'
import {BsArrowRight} from 'react-icons/bs'
import ProductCard from '../Store/ProductCard'

export default function Deals(){
    return(
        <>
            <h1 className='text-4xl font-semibold'>Hot Deals</h1>

            <div className='row mt-5 m-2'>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </div>

            <Link to='/store' className='flex text-[rgb(0,0,255)] font-semibold me-5 mb-5' style={{float: 'right'}}>
                View All 
                <BsArrowRight className='my-auto ms-2'/> 
            </Link>
        </>
    )
}