import React, {useState} from "react";
import {useNavigate, Link} from 'react-router-dom'

export default function Account(){

    const [user, setUser] = useState(false)
    const navigate = useNavigate()

    return(
        <div className="m-3">
            <h1 className="text-lg font-semibold">My Account</h1>
            { user ? (
                    <ul className="text-[#B2BEB5]">
                        <li className="m-2">
                            <Link to='/cart'>My Cart</Link>
                        </li>
                        <li className="m-2">
                            <Link to='/' >My Orders</Link>
                        </li>
                        <li className="m-2">
                            <Link to='/'>My Wishlist</Link>
                        </li>
                        <button className="m-2 btn bg-light text-dark rounded-none" onClick={()  => navigate('/')}>
                            Log Out
                        </button>
                    </ul>
            ):(
                <div className="mx-auto text-[#B2BEB5]">
                    <button className="m-3 btn bg-light text-dark rounded-none" onClick={() => navigate('/login')}>
                        Log In
                    </button>
                    <p>Don't have an Account ?</p>
                    <button className="m-3 btn bg-light text-dark rounded-none" onClick={() => navigate('/signup')}>
                        Create Account
                    </button>
                </div>
            )}
      
    </div>
    )
}