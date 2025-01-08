import React from "react";
import './home.css'
import { Link } from "react-router-dom";
import Category from './Category'
import Deals from "./Deals";

export default function Home() {

    return(
        <>
        
            <div id='headline'>
                <div id='headline-message' className="animate__animated animate__fadeIn animate__slow" >

                   <h1 className="text-light font-semibold font-raleway leading-normal mt-4" id='message'>Elevate Your Aviation Experience!</h1>

                    <Link type="button" className="bg-white p-3 mt-5 mb-4" to='/store'>
                        Go To Store
                    </Link> 

                </div>                
            </div>

            <Category />
            <Deals/>
            
        </>
        
    )
}