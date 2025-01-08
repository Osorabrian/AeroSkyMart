import React from "react";
import {FaOpencart} from 'react-icons/fa'
import './home.css'
import { Link } from "react-router-dom";
import Category from './Category'
import Deals from "./Deals";

export default function Home() {

    return(
        <>
        
            <div id='headline'>
                <div id='headline-message' className="animate__animated animate__fadeInUp animate__slow" >

                   <h1 className="text-light font-semibold font-raleway leading-normal mt-4" id='message'>Elevate Your Aviation Experience!</h1>

                    <Link type="button" className="bg-white p-3" to='/store'>
                        <div className="row font-lato font-4xl">
                            <span className="col-9">
                                Go To Store  
                            </span>
                            <span className="col-3">
                                <FaOpencart className="mt-1 -ml-1"/>
                            </span>
                        </div>
                    </Link> 

                </div>                
            </div>

            <Category />
            <Deals/>
            
        </>
        
    )
}