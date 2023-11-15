import React from "react";
import './Login.css'
import { GoArrowRight } from "react-icons/go";

export default function ResetPassword(){
    return(
        <div className="mb-5">

            <h1 className="text-4xl my-4">Reset Password</h1>

            <form className="mx-auto text-left login-form px-4">
                
                <div className="mb-4">
                    <label className="form-label">Enter New Password</label>
                    <input className="form-control" placeholder='Password' type="password" required/>
                </div>

                <div className="mb-4">
                    <label className="form-label">Repeat New Password</label>
                    <input className="form-control" type="password" placeholder='Password' required/>
                </div>

                <div className="text-center mt-3">
                    <button className="w-7/12  border-1 border-[black] p-2" type="submit">
                        <div className="justify-center flex">
                            Continue
                            <GoArrowRight className="my-auto ms-2"/>
                        </div>
                    </button>
                </div>

            </form>
        </div>
    )
}