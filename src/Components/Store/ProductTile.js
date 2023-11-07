import React from "react";
import {AiFillStar} from 'react-icons/ai'
import thumbnail from '../images/gulfstream.jpg'
import './store.css'

export default function ProductTile(){
    return(
        <div className="m-4">
            <div className="flex m-4">
                <img src={thumbnail} alt={'gulfstream'} id='thumbnail'/>
                <div className="ms-5 text-left">
                    <h2 className="text-xl font-semibold">vgngcncvbbvbncbnbvnb</h2>
                    <div className="flex mt-2">
                        <div className="flex my-auto">
                            <AiFillStar className="checked" />
                            <AiFillStar className="checked"/>
                            <AiFillStar className="unchecked"/>
                            <AiFillStar className="unchecked"/>
                            <AiFillStar className="unchecked"/>
                        </div>
                        <div>
                            <em className="ms-2">(96 reviews)</em>
                        </div>
                    </div>
                    <p className='text-lg mt-2 text-[#e65100]'>Kshs. 25,000</p>
                </div>
            </div>
            <hr className="m-3"></hr>
        </div>
    )
}