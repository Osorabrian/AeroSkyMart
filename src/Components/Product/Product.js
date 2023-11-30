import React, { useState } from "react";
import RatesAndReviews from "./RatesAndReviews";
import SimilarProducts from './SimilarProducts'
import PreviouslyViewed from "./PreviouslyViewed";
import './product.css'
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { GiMoneyStack } from "react-icons/gi";
import { FaCartPlus } from "react-icons/fa";
import { PiBookmarksThin } from "react-icons/pi";
import img1 from '../images/msfs/msfs_cover.jpg'
import img2 from '../images/msfs/msfs_cockpit.jpg'
import img3 from '../images/msfs/msfs_2.jpg'
import img4 from '../images/msfs/msfs_3.jpeg'

export default function Product(){

    const [currentImage, setCurrentImage] = useState(0)
    const [quantity, setQuantity] = useState(1)
    const images = [img1, img2, img3, img4]
    const sellingPrice = 28000

    if(currentImage > images.length - 1){
        setCurrentImage(0)
    }else if(currentImage < 0){
        setCurrentImage(images.length - 1)
    }

    
    return(
        <div>
            <div className="flex flex-wrap py-4 px-3">

                <div id="carousel">

                    <div className="carousel-image">
                        <img src={images[currentImage]} alt="msfs"/>

                        <BsChevronRight className="next-button text-6xl cursor-pointer" onClick={() => {setCurrentImage(currentImage + 1)}}/>

                        <BsChevronLeft className="prev-button text-6xl cursor-pointer" onClick={() => setCurrentImage(currentImage - 1)}/>
                        
                        <p className='image-numbers'>{currentImage + 1}/{images.length}</p>
                    </div>
                    
                </div>

                <div className="m-3 text-left">
                    <h1 className="text-3xl font-bold" id='title'>Microsoft Flight Simulator 2020</h1>

                    <p className="text-xl text-[#ff9800] font-semibold my-2">Kshs. {sellingPrice * quantity}</p>

                    <div className="flex">
                        <p>Quantity:</p>
                        <input type="number" min={1} className="w-11 border-1 border-[black] ms-2 ps-2 focus:outline" onChange={e => setQuantity(e.target.value)}/>
                    </div>
                    
                    <div className="text-center mt-3">

                        <button className="w-7/12 border-1 border-[black] p-2 m-2 bg-black text-white">
                            <div className="justify-center flex">
                                <GiMoneyStack className="my-auto me-2" />
                                Buy It Now
                            </div>
                        </button>

                        <button className="w-7/12 border-1 border-[black] p-2 m-2 bg-black text-white">
                            <div className="justify-center flex">
                                <FaCartPlus className="my-auto me-2" />
                                Add to Cart
                            </div>
                        </button>

                        <button className="w-7/12 border-1 border-[black] p-2 m-2 bg-black text-white">
                            <div className="justify-center flex">
                                <PiBookmarksThin className="my-auto me-2"/>
                                Add to Wish List
                            </div>
                        </button>
                    </div>

                </div>
                </div>

            <RatesAndReviews/>  
            <SimilarProducts/>
            <PreviouslyViewed/>

        </div>
    )
}