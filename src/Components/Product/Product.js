import React, { useState } from "react";
import RatesAndReviews from "./RatesAndReviews";
import SimilarProducts from './SimilarProducts'
import PreviouslyViewed from "./PreviouslyViewed";
import './product.css'
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { GiMoneyStack } from "react-icons/gi";
import { FaCartPlus } from "react-icons/fa";
import { PiBookmarksThin } from "react-icons/pi";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
import { GiTruck } from "react-icons/gi";
import img1 from '../images/msfs/msfs_cover.jpg'
import img2 from '../images/msfs/msfs_cockpit.jpg'
import img3 from '../images/msfs/msfs_2.jpg'
import img4 from '../images/msfs/msfs_3.jpeg'

export default function Product(){

    const [currentImage, setCurrentImage] = useState(0)
    const [quantity, setQuantity] = useState(1)
    const [description, setDescitption] = useState(false)
    const [specifications, setSpecifications] = useState(false)
    const [shipping, setShipping] = useState(false)
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

                <div className="text-left" id='info-div'>
                    <h1 className="text-3xl font-bold" id='title'>Microsoft Flight Simulator 2020</h1>
                    <p className="my-1 flex flex-wrap">Take to the skies and experience the joy of flight in the next generation of Microsoft Flight Simulator. The world is at your fingertips.</p>

                    <div className="flex flex-wrap">

                        <div className="mt-2" id="item-info-div">

                           
                                {/* <div className="flex-wrap m-2">

                                    <div className="flex" onClick={() => setDescitption(!description)}>
                                        <p className="text-2xl">Description</p>
                                        {description === false ? (<FiPlus className="my-auto ms-auto"/>) : (<FiMinus className="my-auto ms-auto"/>)}
                                    </div>

                                    {description && ()}

                                </div> */}

                                <div className="m-2">

                                    <div className="flex" onClick={() => setSpecifications(!specifications)}>
                                        <p className="text-2xl">Specifications</p>
                                        {specifications === false ? (<FiPlus className="my-auto ms-auto"/>) : (<FiMinus className="my-auto ms-auto"/>)}
                                    </div>

                                    {specifications && (
                                        <div className="my-1">
                                            <div className="flex">
                                                <p className="font-semibold text-lg left-col">CPU:</p>
                                                <p className="my-auto right-col">AMD Ryzen 3 1200 or Intel Core i5-4460.</p>
                                            </div>
                                            <div className="flex">
                                                <p className="font-semibold text-lg left-col">RAM:</p>
                                                <p className="my-auto right-col">8 GB.</p>
                                            </div>
                                        </div>
                                    )}
                                </div>

                            <hr></hr>
                                <div className="m-2">

                                    <div className="flex" onClick={() => setShipping(!shipping)}> 
                                        <p className="text-2xl">Shipping</p>
                                        {shipping === false ? (<FiPlus className="my-auto ms-auto"/>) : (<FiMinus className="my-auto ms-auto"/>)}
                                    </div>

                                    {shipping && (
                                        <div className="flex m-2">
                                            <GiTruck className="my-auto fill-[#ff9800] me-2 text-xl"/>
                                            <p>Delivery in 2 - 5 days</p>
                                        </div>
                                    )}
                                </div>
                            <hr></hr>

                        </div>

                        <div className="mx-5">
                            <p className="text-xl text-[#ff9800] font-semibold my-2">Kshs. {sellingPrice * quantity}</p>

                            <div className="flex">
                                <p>Quantity:</p>
                                <div className='flex mx-2'>
                                    <FiMinus className="my-auto" onClick={() => setQuantity(quantity-1)}/>

                                    <input type="text" value={quantity} 
                                    placeholder={quantity}  className="border-1 border-[black] mx-1 px-1 focus:outline my-auto" 
                                    onChange={e => setQuantity(e.target.value)}
                                    id="expandable-input"/>

                                    <GoPlus className="my-auto" onClick={() => setQuantity(quantity+1)}/>
                                </div>
                            </div>
                            
                            <div className="mt-3 flex-wrap">

                                <div className="border-1 border-[black] p-2 m-2 bg-black text-white">
                                    <div className="justify-center flex">
                                        <GiMoneyStack className="my-auto me-2" />
                                        Buy It Now
                                    </div>
                                </div>

                                <div className="border-1 border-[black] p-2 m-2 bg-black text-white">
                                    <div className="justify-center flex">
                                        <FaCartPlus className="my-auto me-2" />
                                        Add to Cart
                                    </div>
                                </div>

                                <div className="border-1 border-[black] p-2 m-2 bg-black text-white">
                                    <div className="justify-center flex">
                                        <PiBookmarksThin className="my-auto me-2"/>
                                        Add to Wish List
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                </div>

            <RatesAndReviews/>  
            <SimilarProducts/>
            <PreviouslyViewed/>

        </div>
    )
}