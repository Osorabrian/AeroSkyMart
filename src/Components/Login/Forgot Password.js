import React from "react";
import './Login.css'
import { useParams } from "react-router-dom";
import { CiCircleCheck } from "react-icons/ci";

export default function ForgotPassword(){

    const {email} = useParams()

    return(
        <div className="mb-5">

            <h1 className="justify-center flex flex-wrap text-4xl font-semibold mt-5">Forgot Password ?</h1>

            <CiCircleCheck className='mx-auto my-5 text-8xl fill-[rgb(0,255,0)]'/>

            <p className="justify-center flex flex-wrap px-2">
                We have sent you an email to your email
                <span className="text-[#0284c7] ms-1 me-1">{email}</span>
                to allow you reset your password.
            </p>

        </div>
    )
}