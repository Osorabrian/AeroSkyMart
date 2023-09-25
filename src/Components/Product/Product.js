import React, { useState } from "react";
import img1 from '../images/msfs/msfs_cover.jpg'
import img2 from '../images/msfs/msfs_cockpit.jpg'
import img3 from '../images/msfs/msfs_1.jpg'
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
            <div id="#carousel">

                <img src={images[currentImage]} alt="msfs" className="mt-4 p-3"/>

                <button type='button' onClick={() => {setCurrentImage(currentImage + 1)}}>
                    next
                </button>

                <button type='button' onClick={() => setCurrentImage(currentImage - 1)}>
                    previous
                </button>
            </div>

            <h1>Microsoft Simulator</h1>
        </>
    )
}