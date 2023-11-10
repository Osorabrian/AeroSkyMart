import React, {useState} from "react";
import PhoneInput from 'react-phone-number-input'
import {BsPersonFillAdd} from 'react-icons/bs'
import {FaApple, FaFacebookF} from 'react-icons/fa' 
import {FcGoogle} from 'react-icons/fc'
import 'react-phone-number-input/style.css'
import './SignUp.css'

export default function SignUp(){

    const [value, setValue] = useState()

    console.log(value)

    return(
        <div className="px-1 py-2 font-lato">

            <form id="signup-form" className="text-left mt-4">
                <div className="row mb-3 flex flex-wrap">
                    <div className="col-6">
                        <label className="form-label">First Name</label>
                        <input type='text' placeholder='First Name' required  className="form-control"/>
                    </div>
                    <div className="col-6">
                        <label className="form-label">Last Name</label>
                        <input type="text" placeholder="Last Name" required className="form-control" />
                    </div>
                </div>

                <div className="row flex flex-wrap mb-3">
                    <div className="col-6">
                    <label className="form-label">Email</label>
                        <input placeholder="email@gmail.com" required className="form-control" type="email" id={'email-input'}/>
                    </div>
                                            
                    <div className="col-6">
                            <label className="form-label">Telephone</label>
                            <PhoneInput maxLength={'11'} type={'tel'} className='form-control -ms-2' value={value} onChange={setValue} placeholder="0712345678" required defaultCountry="KE" id='phone-input'/>
                    </div>  
                </div>
                    
                <div className="mb-3">
                    <label className="form-label">Enter Password</label>
                    <input type="password" required className="form-control" placeholder="Enter Password" />
                </div>

                <div className="mb-3">
                    <label className="form-label">Confirm Password</label>
                    <input type="password" required className="form-control" placeholder="Confirm Password" />
                </div>

                <input type="checkbox" className="me-2 ms-3" />
                <label className="form-text">I agree to the <a href="https://www.amazon.com/" className="text-[#ff9800]">Terms & Conditions.</a></label>

                <div style={{textAlign: 'center'}} className='mt-4' >
                    <button className="border-1 border-black row mx-auto" id='create-button'>
                       <span className='col-9'>Create Account</span>   
                        <BsPersonFillAdd className="col-3 -ml-5 text-xl "/>
                    </button>
                </div>
            </form>

            <div className='row mx-auto mt-1 p-2 signup-div'>
                    <hr className='col-5 my-auto'></hr>
                    <div className='col-2 text-center'>or</div>
                    <hr className='col-5 my-auto'></hr>
            </div>
            
            <div className='mx-auto signup-div mb-5'>
                        <button className='mx-auto w-8/12 p-2 border-1 border-[#4285F4] m-2' id='google-btn'>
                            <div className='justify-center flex'>
                                <FcGoogle className='my-auto me-2'/>
                                Continue with Google
                            </div>
                        </button>

                        <button className='mx-auto w-8/12 p-2 border-1 m-2' id='apple-btn'>
                            <div className='justify-center flex'>
                                <FaApple className='my-auto me-2'/>
                                Continue with Apple
                            </div>
                        </button>

                        <button className='mx-auto w-8/12 p-2 border-1 border-[#1877F2] m-2' id='facebook-btn'>
                            <div className='justify-center flex'>
                                <FaFacebookF className='my-auto me-2'/>
                                Continue with Facebook
                            </div>
                        </button>
            </div>
        </div>
    )
}