import React from "react";
import gulfStream from '../images/gulfstream.jpg'
import {FaOpencart} from 'react-icons/fa'
import './home.css'

export default function Home() {

    return(
        <>
            <img src={gulfStream} alt='headline' id='headline-photo' style={{zIndex: '-2'}}/>
            <div id='headline-message'>
                <h1 className="text-6xl text-light font-medium leading-normal">Elevate Your Aviation Experience !</h1>
                <button type="button" id='store-button'>
                    <div className="row">
                        <span className="col-9">
                           Go To Store  
                        </span>
                        <FaOpencart className="col-3 mt-1"/>
                    </div>
                </button>
            </div>
        </>
        
    )
}