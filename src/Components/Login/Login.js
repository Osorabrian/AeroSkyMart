import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

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

            <form onSubmit={logInFunction} className='w-9/12 mx-auto text-left' id='login-form'>

                <h1 className='text-6xl'>Log In</h1>

                <div className='mt-5 mb-3'>
                    <label className={'form-label'}>Username:</label>
                    <input type='text' placeholder='Enter Username' className='form-control' onChange={e => setUserName(e.target.value)}/>
                </div>
                
                <div className='mb-4'>
                    <label className='form-label'>Password:</label>
                    <input type='password' placeholder='Enter Password' className='form-control' onChange={e => setPassword(e.target.value)}/>
                </div>
                
                <button type='submit' className='btn btn-primary' id='login-button'>Log In</button>

            </form>
        )
    
}