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

                <div className='row m-2 mb-4'>

                <h1 className='text-4xl font-semibold mt-4 mb-4'>Hot Deals</h1>

                    {cardList.slice(0,4).map((product) => {
                        return <ProductCard key={product.id} name={product.title} id={product.id}/>
                    })}
                </div>
                
                <Link className='flex text-[rgb(0,0,255)] font-semibold justify-center'>
                    <div className='m-2 flex'>
                        <span className='-mt-6'>View More</span> 
                        <BsArrowRight className='-mt-5 ms-2 '/> 
                    </div>
                </Link>
                        
        </div>
    )
}