import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import {FaFighterJet} from 'react-icons/fa' 
import './Login.css'

export default function EmailLogin(){

    const [password, setPassword] = useState('')
    
    return(
        <form>
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
    )
}