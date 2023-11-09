import React from "react";
import {AiFillStar,AiOutlineStar} from 'react-icons/ai'
import {BsStarHalf} from 'react-icons/bs'
import thumbnail from '../images/gulfstream.jpg'
import './store.css'
import {Link} from 'react-router-dom'

export default function ProductTile({name, id}){
    return(
        <div className="mb-3" id='project-tile'>
            <Link id='tile' to={`${id}`}>
                <div className="flex">
                    <img src={thumbnail} alt={'gulfstream'} id='thumbnail'/>
                    <div className="ms-3 text-left">
                        <h2 className="text-xl font-semibold flex flex-wrap tile-text" id='tile-title'>{name}</h2>
                        <div className="flex flex-wrap m-2">
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
                        <p className='text-lg text-[#e65100] tile-text font-semibold'>Kshs. 25,000</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}