import React from "react";
import {FaOpencart} from 'react-icons/fa'
import './home.css'
import { Link } from "react-router-dom";

export default function Home() {

    return(
        <>
            <div id='headline'>

                <div id='headline-message' className="text-left animate__animated animate__fadeInUp" >

                   <h1 className="text-6xl text-light font-semibold font-raleway leading-normal mt-4">Elevate Your Aviation Experience!</h1>

                    <Link type="button" id='store-button' className="mt-5 mb-5 ms-3" to='/store'>
                        <div className="row font-lato font-4xl">
                            <span className="col-9">
                            Go To Store  
                            </span>
                            <FaOpencart className="col-3 mt-1 -ml-1"/>
                        </div>
                    </Link> 

                </div>
                
            </div>
        </>
        
    )
}