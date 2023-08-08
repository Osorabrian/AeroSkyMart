import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Navbar(){
    return(
        <nav className='bg-[rgb(0,0,0)] text-light navbar'>
            <NavLink className='navbar-brand text-light' to='/'>AeroSkyMart</NavLink>
            <div>
                <ul className='d-flex'>
                    <li className='nav-item me-2'>
                        <NavLink to='/home' className={'nav-link'}>Home</NavLink>
                    </li>
                    <li className='nav-item me-2'>
                        <NavLink to='/store' className={'nav-link'}>Store</NavLink>
                    </li>
                    <li className='nav-item me-2'>
                        <NavLink to='/cart' className={'nav-link'}>Cart</NavLink>
                    </li>
                    <li className='nav-item me-2'>
                        <NavLink to='/login' className={'nav-link'}>LogIn</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}