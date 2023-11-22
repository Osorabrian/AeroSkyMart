import React from "react";
import {AiFillStar,AiOutlineStar} from 'react-icons/ai'
import {BsStarHalf} from 'react-icons/bs'
import './productcard.css'
import {Link} from 'react-router-dom'
import gulf from '../images/gulfstream.jpg'

export default function ProjectCard({name,id}){

    return(
        <Link className="card mb-4 px-0" id='product-card' to ={`${id}`} >
            <img src={gulf} alt='lt' className="card-img-top px-0 flex-0"/>
            <div className="card-body text-left -ms-3 -mt-2">
                <p className='card-text mb-1 font-semibold' id='card-title'>{name}</p>
                <div className="flex flex-wrap my-2">
                            <div className="flex my-auto">
                                <AiFillStar className="checked" />
                                <AiFillStar className="checked"/>
                                <BsStarHalf className="checked"/>
                                <AiOutlineStar className="unchecked"/>
                                <AiOutlineStar className="unchecked"/>
                            </div>
                            <div>
                                <em className="ms-2 tile-text">(96 reviews)</em>
                            </div>
                </div>
                <h1 className='card-text font-semibold text-[#e65100]'>Kshs. 20,000</h1>
            </div>
        </Link>
    )
}