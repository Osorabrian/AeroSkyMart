import React, {useState} from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
import {FaApple, FaFacebookF} from 'react-icons/fa' 
import { IoIosMail } from "react-icons/io";
import {FcGoogle} from 'react-icons/fc'
import './Login.css'

export default function Login(){

    const navigate = useNavigate()

    const [userName, setUserName] = useState('')

    function logInFunction(e){
        e.preventDefault()
        console.log({userName})
        navigate('/email_login')
    }

        return(
            <div className='px-3 mb-5 mt-3 font-lato'>

                <h1 className='text-6xl'>Log In</h1>

                <form onSubmit={logInFunction} className='mx-auto mt-3 text-left' id='login-form'>

                    <div className='mt-3 mb-4'>
                        <label className={'form-label'}>Email:</label>
                        <input type='email' placeholder='example@gmail.com' className='form-control' onChange={e => setUserName(e.target.value)} required />
                    </div>

                    <div className='text-center'>
                        <button className='mx-auto w-8/12 p-2 border-1 border-[black] m-2' id='login-button' onClick={logInFunction}>
                                <div className='justify-center flex'>
                                    <IoIosMail className='my-auto me-2'/>
                                    Continue with Email
                                </div>
                        </button>
                    </div>

                </form>

                <div className='row mx-auto mt-1 p-3 login-div'>
                        <hr className='col-5 my-auto'></hr>
                        <div className='col-2 text-center'>or</div>
                        <hr className='col-5 my-auto'></hr>
                </div>
                
                <div className='mx-auto login-div'>

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
                                
                    <div className='mt-4 text-center'>
                        <p>Don't have an account ? <NavLink to='/signup' className='text-[#ff9800]'>Sign Up.</NavLink></p>
                    </div>
                </div>
            </div>
        )
    
}