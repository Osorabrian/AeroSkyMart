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
            <form onSubmit={logInFunction}>
                <h1>Log In</h1>
                <label>Username:</label>
                <input type='text' placeholder='Enter Username' onChange={e => setUserName(e.target.value)}/>
                <label>Password:</label>
                <input type='password' placeholder='Enter Password' onChange={e => setPassword(e.target.value)}/>
                <button type='submit'>Log In</button>
            </form>
        )
    
}