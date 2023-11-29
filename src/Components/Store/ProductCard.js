import React, {useState} from "react";
import {AiFillStar,AiOutlineStar} from 'react-icons/ai'
import {BsStarHalf} from 'react-icons/bs'
import './productcard.css'
import {Link} from 'react-router-dom'
import gulf from '../images/gulfstream.jpg'

export default function ProductCard({name,id}){

    const[reviews, setReviews] = useState(960000)

    if(reviews >= 1000000){
        setReviews('1M+')
    }else if(reviews >= 100000 && reviews < 1000000){
        const editedReview = reviews.toString().split('').slice(0,3).join('')
        setReviews(`${editedReview}K+`)
    }

    return(
        <Link className="card mb-4 px-0" id='product-card' to ={`${id}`} >
            <img src={gulf} alt='lt' className="card-img-top px-0 flex-0"/>
            <div className="card-body text-left -ms-3 -mt-2">
                <p className='card-text mb-1 font-semibold hover:text-[#ff9800]' id='card-title'>{name}</p>
                <div className="flex flex-wrap my-1">
                            <div className="flex my-auto">
                                <AiFillStar className="checked" />
                                <AiFillStar className="checked"/>
                                <BsStarHalf className="checked"/>
                                <AiOutlineStar className="unchecked"/>
                                <AiOutlineStar className="unchecked"/>
                            </div>
                            <p className="ms-1">(4.4)</p>
                </div>
                <div>
                    <em className="ms-1 mb-2 tile-text">{reviews} reviews</em>
                </div>
                <h1 className='card-text font-semibold text-[#e65100]'>Kshs. 20,000</h1>
            </div>
        </Link>
    )
}