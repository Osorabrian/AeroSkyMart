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
        <div className='bg-[#a8acab] mt-5'>

            <div className='row mt-3 m-5'>
                <h1 className='text-4xl font-semibold mt-4'>Hot Deals</h1>

                {cardList.slice(0,4).map((product) => {
                    return <ProductCard key={product.id} name={product.title} id={product.id}/>
                })}
                
                <button to='/store' className='flex text-[rgb(0,0,255)] font-semibold m-4 justify-end me-5' style={{float: 'right'}}>
                    View More 
                    <BsArrowRight className='my-auto ms-2'/> 
                </button>

            </div>
  
        </div>
    )
}