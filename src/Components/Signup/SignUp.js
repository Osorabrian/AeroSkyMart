import React from "react";
import './SignUp.css'

export default function SignUp(){

    return(
        <>
            <form id="signup-form" className="text-left mx-auto mt-5 border-1 border-black p-7">

                <div className="row mb-3 flex-wrap">
                    <div className="col-6">
                        <label className="form-label">First Name</label>
                        <input type='text' placeholder='First Name' required  className="form-control"/>
                    </div>
                    <div className="col-6">
                        <label className="form-label">Last Name</label>
                        <input type="text" placeholder="Last Name" required className="form-control" />
                    </div>
                </div>

                <div className="mb-3 flex-wrap">
                        <label className="form-label">Email</label>
                        <input placeholder="email@domain.com" required className="form-control" type="text" />
                </div>
                    

                <div>
                        <label className="form-label">TelePhone</label>
                        <input className="form-control" type={'number'} placeholder="e.g 0746451952" required />
                </div>

                <div className="mb-3">
                    <label className="form-label">Enter Password</label>
                    <input type="password" required className="form-control" placeholder="Enter Password" />
                </div>

                <div className="mb-3">
                    <label className="form-label">Repeat Password</label>
                    <input type="password" required className="form-control" placeholder="Repeat Password" />
                </div>

                <input type="checkbox" />  <label className="form-text">I agree to the Terms & Conditions.</label>

                <div style={{textAlign: 'center'}} className="mt-3">
                    <button className="border-1 border-black" id='create-button'>Create Account</button>
                </div>

            </form>
        </>
    )
}