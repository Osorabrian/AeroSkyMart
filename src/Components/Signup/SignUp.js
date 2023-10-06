import React, {useState} from "react";
import PhoneInput from 'react-phone-number-input'
import {BsPersonFillAdd} from 'react-icons/bs'
import {FaApple} from 'react-icons/fa' 
import {FcGoogle} from 'react-icons/fc'
import {TfiEmail} from 'react-icons/tfi'
import 'react-phone-number-input/style.css'
import './SignUp.css'

export default function SignUp(){

    const [value, setValue] = useState()

    console.log(value)

    return(
        <div className="px-3 py-2 font-lato">

            <form id="signup-form" className="text-left">
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
                            <PhoneInput maxLength={'11'} type={'tel'} className='form-control' value={value} onChange={setValue} placeholder="0712345678" required defaultCountry="KE" id='phone-input'/>
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
                       <span className='col-9'>Sign Up</span>   
                        <BsPersonFillAdd className="col-3 -ml-5 text-xl "/>
                    </button>
                </div>
            </form>

            <div className='row mx-auto mt-1 p-1 login-div'>
                    <hr className='col-5 my-auto'></hr>
                    <div className='col-2 text-center'>or</div>
                    <hr className='col-5 my-auto'></hr>
            </div>
            
            <div className='mx-auto login-div'>
                <div className='text-center mt-2'>
                    <button className='w-9/12 p-2 border-1 border-black'>
                        <div className='row'>
                            <FaApple className='col-3 my-auto'/>
                            <span className='col-9 -ms-6'>Sign Up with Apple</span>
                        </div>
                    </button>
                </div>

                <div className='text-center mt-1'>
                    <button className='w-9/12 p-2 border-1 border-black'>
                        <div className='row'>
                            <FcGoogle className='col-3 my-auto'/>
                            <span className='col-9 -ms-6'>Sign Up with Google</span>
                        </div>
                    </button>
                </div>

                <div className='text-center mt-2 mb-4'>
                    <button className='w-9/12 p-2 border-1 border-black'>
                        <div className='row'>
                            <TfiEmail className='col-3 my-auto'/>
                            <span className='col-9 -ms-6'>Sign Up with Email</span>
                        </div>
                    </button>
                </div>
                
            </div>
        </div>
    )
}