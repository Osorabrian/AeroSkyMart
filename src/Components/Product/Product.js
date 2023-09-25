import React, { useState } from "react";
import './product.css'
import {FcPrevious, FcNext} from 'react-icons/fc'
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
            <div id="carousel">

                <div className="carousel-image">
                    <img src={images[currentImage]} alt="msfs" className="mt-4 p-3"/>

                    <button type='button' className="next-button" onClick={() => {setCurrentImage(currentImage + 1)}}>
                        <FcNext className="text-4xl hover:scale-150"/>
                    </button>

                    <button type='button' className="prev-button" onClick={() => setCurrentImage(currentImage - 1)}>
                        <FcPrevious className="text-4xl hover:scale-150"/>
                    </button>
                    
                    <p className='image-numbers'>{currentImage + 1}/{images.length}</p>
                </div>
                

                
            </div>

            <h1>Microsoft Simulator</h1>
        </>
    )
}