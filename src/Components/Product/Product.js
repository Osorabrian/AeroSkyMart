import React, { useState } from "react";
import './product.css'
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { GiMoneyStack } from "react-icons/gi";
import { FaCartPlus } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import {AiFillStar,AiOutlineStar} from 'react-icons/ai'
import {BsStarHalf} from 'react-icons/bs'
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
        <>
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

                        <button className="w-6/12 border-1 border-[black] p-2 m-2 bg-black text-white">
                            <div className="justify-center flex">
                                <GiMoneyStack className="my-auto me-2" />
                                Buy It Now
                            </div>
                        </button>

                        <button className="w-6/12 border-1 border-[black] p-2 m-2 bg-black text-white">
                            <div className="justify-center flex">
                                <FaCartPlus className="my-auto me-2" />
                                Add to Cart
                            </div>
                        </button>

                        <button className="w-6/12 border-1 border-[black] p-2 m-2 bg-black text-white">
                            <div className="justify-center flex">
                                <PiBookmarksThin className="my-auto me-2"/>
                                Add to Wish List
                            </div>
                        </button>
                    </div>

                </div>

            </div>

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

                <div>
                    <p className="m-2 text-2xl font-semibold">100,000 Reviews</p>

                    <div>
                        <div className='flex ms-3'>
                            <RxAvatar className="text-6xl my-auto"/>
                            <div className="flex-wrap ms-2 text-left my-auto">
                                <p className="text-lg font-semibold">Brian Osora</p>
                                <div className="flex my-auto">
                                        <AiFillStar className="checked my-auto" />
                                        <AiFillStar className="checked my-auto"/>
                                        <BsStarHalf className="checked my-auto"/>
                                        <AiOutlineStar className="unchecked my-auto"/>
                                        <AiOutlineStar className="unchecked my-auto"/>
                                </div>   
                            </div>
                            <p className="ms-auto tile-text my-auto me-3">11/23/2023</p>
                        </div>

                        <p className="flex-wrap text-left ms-3 mt-1">
                            sdfvbdvsdfnv mdfsnvdfjvd fjvhbvjhhdsv iueheiuhevbe uvierrbeb hbevebjhve vehrbefehbfer hbejhebf hejrbfehjferf hjebrfer
                        </p>

                        <hr className="m-3"></hr>
                    </div>


                </div>
            </div>
        </>
    )
}