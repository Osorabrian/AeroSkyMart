import React from 'react'
import Review from './Review'
import { RxAvatar } from "react-icons/rx";
import {AiFillStar,AiOutlineStar} from 'react-icons/ai'
import {BsStarHalf} from 'react-icons/bs'

export default function RatesAndReviews(){
    return(
            <div>

                <div className='flex ms-3'>
                    <RxAvatar className="text-6xl my-auto"/>
                    <div className="flex-wrap ms-2 text-left my-auto">
                        <p className="text-xl font-semibold">Brian Osora</p>
                        <div className="flex my-auto">
                                <AiFillStar className="checked my-auto" />
                                <AiFillStar className="checked my-auto"/>
                                <BsStarHalf className="checked my-auto"/>
                                <AiOutlineStar className="unchecked my-auto"/>
                                <AiOutlineStar className="unchecked my-auto"/>
                                <div>
                                    <em className="ms-1 tile-text">(4.4 rating)</em>
                                </div>
                        </div>   
                    </div>
                </div>

                <p className="m-2 text-2xl font-semibold">100,000 Reviews</p>

                <Review/>
                <Review/>
                <Review/>

                <button className='p-1 border-1 border-[grey] rounded-xl'>
                    Show More
                </button>
        </div>
    )
}