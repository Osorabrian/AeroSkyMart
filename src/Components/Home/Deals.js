import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import {BsArrowRight} from 'react-icons/bs'
import ProductCard from '../Store/ProductCard'
import '../Home/home.css'

export default function Deals(){

    const [cardList, setCardList] = useState([])

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/albums')
        .then(res => res.json())
        .then(data => setCardList(data))
    },[])

    return(
        <div>
                <div className='row mx-2 mb-4'>

                <div className='flex'>
                    <h1 className='text-4xl font-semibold mt-4 mb-4 text-left m-2'>Hot Deals</h1>

                    <Link to={'/store'} className='flex text-[#ff9800] font-semibold ms-auto'>
                        <div className='m-4 flex'>
                            <span className='my-auto'>View More</span> 
                            <BsArrowRight className='ms-2 my-auto'/> 
                        </div>
                    </Link>
                </div>
                
                <div className='flex flex-row space-x-5 overflow-x-scroll w-screen'>
                    {cardList.slice(0,8).map((product) => {
                        return(
                            <div key={product.id} >
                                <ProductCard name={product.title} id={product.id}/>
                            </div>
                        )
                    })}
                </div>
                </div>
                        
        </div>
    )
}