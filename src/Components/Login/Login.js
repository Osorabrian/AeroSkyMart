import React, {useState} from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
import {FaFighterJet, FaApple} from 'react-icons/fa' 
import {FcGoogle} from 'react-icons/fc'
import {TfiEmail} from 'react-icons/tfi'
import './Login.css'

export default function Login(){

    const navigate = useNavigate()

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    function logInFunction(e){
        e.preventDefault()
        console.log({userName, password})
        navigate('/home')
    }

        return(
            <div className='px-3 py-2 font-lato'>

                <form onSubmit={logInFunction} className='mx-auto text-left' id='login-form'>

                    {/* <GiPlanePilot className='text-6xl mx-auto mt-1' /> */}

                    <div className='mt-3 mb-4'>
                        <label className={'form-label'}>Email:</label>
                        <input type='email' placeholder='example@gmail.com' className='form-control' onChange={e => setUserName(e.target.value)} required />
                    </div>
                    
                    <div>
                        <label className='form-label'>Password:</label>
                        <input type='password' placeholder='Enter Password' className='form-control' onChange={e => setPassword(e.target.value)} required/>
                    </div>

                    <div className='mb-1 text-right'>
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
                    <div className='text-center mt-1'>
                        <button className='w-9/12 p-2 border-1 border-black'>
                            <div className='row'>
                                <FaApple className='col-3 my-auto'/>
                                <span className='col-9 -ms-6'>Continue with Apple</span>
                            </div>
                        </button>
                    </div>

                    <div className='text-center mt-3'>
                        <button className='w-9/12 p-2 border-1 border-black'>
                            <div className='row'>
                                <FcGoogle className='col-3 my-auto'/>
                                <span className='col-9 -ms-6'>Continue with Google</span>
                            </div>
                        </button>
                    </div>

                    <div className='text-center mt-3'>
                        <button className='w-9/12 p-2 border-1 border-black'>
                            <div className='row'>
                                <TfiEmail className='col-3 my-auto'/>
                                <span className='col-9 -ms-6'>Continue with Email</span>
                            </div>
                        </button>
                    </div>
                                
                    <div className='mt-4 text-center'>
                        <p>Don't have an account ? <NavLink to='/signup' className='text-[#ff9800]'>Sign Up.</NavLink></p>
                    </div>
                </div>
            </div>
        )
    
}