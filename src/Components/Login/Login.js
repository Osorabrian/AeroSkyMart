import React, {useState} from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
import {FaFighterJet} from 'react-icons/fa'
import {GiPlanePilot} from 'react-icons/gi'
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

            <form onSubmit={logInFunction} className='mx-auto text-left mt-3 p-4 font-lato' id='login-form'>

                <GiPlanePilot className='text-8xl mx-auto' />

                <div className='mt-3 mb-4'>
                    <label className={'form-label'}>Email:</label>
                    <input type='email' placeholder='example@gmail.com' className='form-control' onChange={e => setUserName(e.target.value)} required/>
                </div>
                
                <div>
                    <label className='form-label'>Password:</label>
                    <input type='password' placeholder='Enter Password' className='form-control' onChange={e => setPassword(e.target.value)} required/>
                </div>

                <div className='mb-4 text-right'>
                    <NavLink className='form-text text-[#ff9800]'>Forgot Password ?</NavLink>
                </div>

                <div className='text-center'>
                    <button type='submit' className='w-10/12 p-2 border-1 border-black' id='login-button'>
                        <div className='row'>
                            <span className='col-9'>Log In</span>
                            <FaFighterJet className='col-3 mt-1 -ml-8'/>
                        </div>
                    </button>
                </div>

                <div className='mt-4 text-center'>
                    <p>Don't have an acount ? <NavLink to='/signup' className='text-[#ff9800]'>Sign Up.</NavLink></p>
                </div>
               

            </form>
        )
    
}