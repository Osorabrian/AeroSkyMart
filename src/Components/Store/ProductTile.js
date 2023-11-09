import React from "react";
import {AiFillStar} from 'react-icons/ai'
import thumbnail from '../images/gulfstream.jpg'
import './store.css'

export default function ProductTile(){
    return(
        <div className="m-2" id='tile'>
            <div className="flex">
                <img src={thumbnail} alt={'gulfstream'} id='thumbnail'/>
                <div className="m-3 text-left">
                    <h2 className="text-xl font-semibold flex flex-wrap tile-text">vgngcncvbbv bncbnbvnb</h2>
                    <div className="flex">
                        <div className="flex my-auto">
                            <AiFillStar className="checked" />
                            <AiFillStar className="checked"/>
                            <AiFillStar className="unchecked"/>
                            <AiFillStar className="unchecked"/>
                            <AiFillStar className="unchecked"/>
                        </div>
                        <div>
                            <em className="ms-2 tile-text">(96)</em>
                        </div>
                    </div>
                    <p className='text-lg text-[#e65100] tile-text'>Kshs. 25,000</p>
                </div>
            </div>
        </div>
    )
}