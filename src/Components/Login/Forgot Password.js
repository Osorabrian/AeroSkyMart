import React from "react";
import './Login.css'
import { useParams } from "react-router-dom";
import { CiCircleCheck } from "react-icons/ci";

export default function ForgotPassword(){

    const {firstName} = useParams()

    return(
        <div className="mb-5">

            <h1 className="justify-center flex flex-wrap text-4xl font-semibold mt-4">Forgot Password ?</h1>

            <CiCircleCheck className='mx-auto my-4 text-8xl fill-[rgb(0,255,0)]'/>

            <p className="justify-center flex flex-wrap">We have sent you an email to your email osorabrian@gmail.com to allow you reset your password.</p>

        </div>
    )
}