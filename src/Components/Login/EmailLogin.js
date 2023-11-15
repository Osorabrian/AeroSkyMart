import React, {useState} from "react";
import {Link, useParams, useNavigate } from "react-router-dom";
import {FaFighterJet} from 'react-icons/fa' 
import './Login.css'

export default function EmailLogin(){

    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('osora')
    const {email} = useParams()
    const navigate = useNavigate()

    const logIn = function(e){
        e.preventDefault()
        console.log({email, password})
        navigate('/')
    }

    return(
        <div className="mb-5 px-4">

            <h1 className="justify-center text-5xl flex m-4 flex-wrap">Hello! {firstName}.</h1>

            <form className="mx-auto text-left login-form" onSubmit={logIn}>

                    <div>
                        <label className='form-label'>Enter password to proceed :</label>
                        <input type='password' placeholder='Password' className='form-control' onChange={e => setPassword(e.target.value)} required/>
                    </div>

                    <div className='mb-5 mt-1 text-right'>
                        <Link className='form-text text-[#ff9800]' to={`forgot_password/${firstName}`}>Forgot Password ?</Link>
                    </div>

                    <div className="text-center">
                        <button type='submit' className='w-8/12 p-2 border-1 border-black' id='login-button'>
                            <div className='justify-center flex'>
                                Log In
                                <FaFighterJet className='my-auto ms-3'/>
                            </div>
                        </button>
                    </div>
            </form>
        </div>
    )
}