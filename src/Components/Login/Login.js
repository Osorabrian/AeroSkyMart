import React, {Component} from 'react'

export default class Login extends Component {

    logInFunction = (e) => {
        e.preventDefault()
        console.log('submitted')
    }

    render(){
        return(
            <form onSubmit={this.logInFunction}>
                <h1>Log In</h1>
                <label>Username:</label>
                <input type='text' placeholder='Enter Username' />
                <label>Password:</label>
                <input type='password' placeholder='Enter Password'/>
                <button type='submit'>Log In</button>
            </form>
        )
    }
}