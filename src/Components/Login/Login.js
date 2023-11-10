import React, {useState} from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
import {FaFighterJet, FaApple, FaFacebookF} from 'react-icons/fa' 
import {FcGoogle} from 'react-icons/fc'
import './Login.css'

export default function Login(){

    const navigate = useNavigate()

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    function logInFunction(e){
        e.preventDefault()
        console.log({userName, password})
        navigate('/')
    }

        return(
            <div className='px-3 py-5 font-lato'>

                <form onSubmit={logInFunction} className='mx-auto mt-3 text-left' id='login-form'>

                    {/* <GiPlanePilot className='text-6xl mx-auto mt-1' /> */}

                    <div className='mt-3 mb-4'>
                        <label className={'form-label'}>Email:</label>
                        <input type='email' placeholder='example@gmail.com' className='form-control' onChange={e => setUserName(e.target.value)} required />
                    </div>
                    
                    <div>
                        <label className='form-label'>Password:</label>
                        <input type='password' placeholder='Enter Password' className='form-control' onChange={e => setPassword(e.target.value)} required/>
                    </div>

                    <div className='mb-3 text-right'>
                        <NavLink className='form-text text-[#ff9800]'>Forgot Password ?</NavLink>
                    </div>

                    <div className='text-center mb-1'>
                        <button type='submit' className='w-10/12 p-2 border-1 border-black' id='login-button'>
                            <div className='row'>
                                <span className='col-9'>Log In</span>
                                <FaFighterJet className='col-3 mt-1 -ml-8'/>
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

                        <button className='w-9/12 p-2 border-1 border-[#4285F4] m-2' id='google-btn'>
                            <div className='flex'>
                                <FcGoogle className='my-auto ms-5 me-2'/>
                                <span className='justify-center'>Continue with Google</span>
                            </div>
                        </button>

                        <button className='w-9/12 p-2 border-1 m-2' id='apple-btn'>
                            <div className='flex'>
                                <FaApple className='my-auto ms-5 me-2'/>
                                <span className='justify-center'>Continue with Apple</span>
                            </div>
                        </button>

                        <button className='w-9/12 p-2 border-1 border-[#1877F2] m-2' id='facebook-btn'>
                            <div className='flex'>
                                <FaFacebookF className='my-auto ms-5 me-2'/>
                                <span className='justify-center'>Continue with Facebook</span>
                            </div>
                        </button>
                                
                    <div className='mt-4 text-center'>
                        <p>Don't have an account ? <NavLink to='/signup' className='text-[#ff9800]'>Sign Up.</NavLink></p>
                    </div>
                </div>
            </div>
        )
    
}