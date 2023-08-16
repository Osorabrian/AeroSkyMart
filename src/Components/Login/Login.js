import React, {useState} from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
import {FaFighterJet} from 'react-icons/fa'
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

            <form onSubmit={logInFunction} className='w-9/12 mx-auto text-left mt-5 p-4' id='login-form'>

                <h1 className='text-6xl text-center'>Log In</h1>

                <div className='mt-5 mb-3'>
                    <label className={'form-label'}>Username:</label>
                    <input type='text' placeholder='Enter Username' className='form-control' onChange={e => setUserName(e.target.value)} required/>
                </div>
                
                <div>
                    <label className='form-label'>Password:</label>
                    <input type='password' placeholder='Enter Password' className='form-control' onChange={e => setPassword(e.target.value)} required/>
                </div>

                <div className='mb-3 text-right'>
                    <NavLink className='form-text text-[#ff9800]'>Forgot Password ?</NavLink>
                </div>

                <div className='text-center'>
                    <button type='submit' className='p-2 border-1 border-black' id='login-button'>
                        <div className='row'>
                            <span className='col-9'>Log In</span>
                            <FaFighterJet className='col-3 mt-1 -ml-8'/>
                        </div>
                    </button>
                </div>

                <div className='mt-3 text-center'>
                    <p>Don't have an acount ? <NavLink to='/signup' className='text-[#ff9800]'>Create Account.</NavLink></p>
                </div>
               

            </form>
        )
    
}