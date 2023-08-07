import React, {Component} from 'react'

export default class Login extends Component {

    render(){
        return(
            <form>
                <label>Username:</label>
                <input type='text' placeholder='Enter Username' />
                <label>Password:</label>
                <input type='password' placeholder='Enter Password'/>
                <button type='submit'>Log In</button>
            </form>
        )
    }
}