import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login(){

    const navigate = useNavigate()
    const logins = JSON.parse(localStorage.getItem('logins'))

    const [userName, setUserName] = useState(logins.userName || "")
    const [password, setPassword] = useState(logins.password || "")
    const formData = {userName, password}

    function logInFunction(e){
        e.preventDefault()
        console.log({userName, password})
        navigate('/home')
        localStorage.removeItem('logins')
    }

    useEffect(() => {
        localStorage.setItem('logins', JSON.stringify(formData))
    }, [formData])

        return(

            <form onSubmit={logInFunction} className='w-9/12 mx-auto text-left' id='login-form'>

                <h1 className='text-6xl'>Log In</h1>

                <div className='mt-5 mb-3'>
                    <label className={'form-label'}>Username:</label>
                    <input type='text' placeholder='Enter Username' value={userName} className='form-control' onChange={e => setUserName(e.target.value)}/>
                </div>
                
                <div className='mb-4'>
                    <label className='form-label'>Password:</label>
                    <input type='password' placeholder={'Enter Password'} value={password} className='form-control' onChange={e => setPassword(e.target.value)}/>
                </div>
                
                <button type='submit' className='btn btn-primary' id='login-button'>Log In</button>

            </form>
        )
    
}