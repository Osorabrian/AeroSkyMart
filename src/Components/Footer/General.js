import React from "react";
import {Link} from 'react-router-dom'
import {TfiEmail} from 'react-icons/tfi'
import {PiPhoneCallThin} from 'react-icons/pi'

export default function General(){

    return(
        <div className="m-3">
            <h1 className="text-lg font-semibold">General</h1>

            <ul className="text-[#B2BEB5]">

                <li className="m-2">
                    <Link to='/about'>About Us</Link>
                </li>

                <li className="m-2">
                    <Link to='/contact'>Contact Us</Link>
                </li>

                <a href='mailto:thorabrian@gmail.com' className="flex m-2">
                    <TfiEmail className="my-auto"/>
                    <span className="ms-2">info@aeroskymart.com</span>
                </a>

                <a href="tel:+254746451952" className="flex m-2">
                    <PiPhoneCallThin className="my-auto"/>
                    <span className="my-auto ms-2">+254712345678</span>
                </a>

            </ul>

        </div>
    )
}