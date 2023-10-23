import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import {BsArrowRight} from 'react-icons/bs'
import ProductCard from '../Store/ProductCard'

export default function Deals(){

    const [cardList, setCardList] = useState([])

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/albums')
        .then(res => res.json())
        .then(data => setCardList(data))
    },[])

    return(
        <>
            <h1 className='text-4xl font-semibold'>Hot Deals</h1>

            <div className='row mt-5 m-2'>
                {cardList.slice(0,4).map((product) => {
                    return <ProductCard key={product.id} name={product.title} id={product.id}/>
                })}
            </div>

            <Link to='/store' className='flex text-[rgb(0,0,255)] font-semibold me-5 mb-5' style={{float: 'right'}}>
                View All 
                <BsArrowRight className='my-auto ms-2'/> 
            </Link>
        </>
    )
}