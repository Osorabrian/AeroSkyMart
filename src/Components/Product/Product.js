import React, { useState } from "react";
import './product.css'
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import img1 from '../images/msfs/msfs_cover.jpg'
import img2 from '../images/msfs/msfs_cockpit.jpg'
import img3 from '../images/msfs/msfs_2.jpg'
import img4 from '../images/msfs/msfs_3.jpeg'

export default function Product(){

    const [currentImage, setCurrentImage] = useState(0)
    const images = [img1, img2, img3, img4]

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

                <div className="m-3">
                    <h1 className="text-3xl text-left font-bold" id='title'>Microsoft Flight Simulator 2020</h1>
                </div>

            </div>
        </>
    )
}