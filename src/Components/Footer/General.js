import React from "react";
import {TfiEmail} from 'react-icons/tfi'
import {PiPhoneCallThin} from 'react-icons/pi'

export default function General(){
    return(
        <div className="m-3">
            <h1 className="text-lg font-semibold">General</h1>

            <div className="text-[#B2BEB5]">
                <p className="m-2">About Us</p>
                <p className="m-2">Contact Us</p>

                <div className="flex m-2">
                    <TfiEmail className="my-auto"/>
                    <span className="my-auto ms-2">info@aeroskymart.com</span>
                </div>

                <div className="flex m-2">
                    <PiPhoneCallThin className="my-auto"/>
                    <span className="my-auto ms-2">+254712345678</span>
                </div>
            </div>

        </div>
    )
}