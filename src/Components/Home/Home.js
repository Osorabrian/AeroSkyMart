import React from "react";
import {FaOpencart} from 'react-icons/fa'
import './home.css'

export default function Home() {

    return(
        <>
            <div id='headline'>

                <div id='headline-message'>

                   <h1 className="text-6xl text-light font-medium leading-normal text-left ">Elevate Your Aviation Experience !</h1>

                    <button type="button" id='store-button'>
                        <div className="row">
                            <span className="col-9">
                            Go To Store  
                            </span>
                            <FaOpencart className="col-3 mt-1"/>
                        </div>
                    </button> 

                </div>
                
            </div>
        </>
        
    )
}