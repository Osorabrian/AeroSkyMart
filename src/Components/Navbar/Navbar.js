import React from 'react'
import {FaHome} from 'react-icons/fa'
import {BiStore} from 'react-icons/bi'
import {AiOutlineLogin, AiOutlineShoppingCart, AiOutlineUserAdd} from 'react-icons/ai'
import {NavLink} from 'react-router-dom'
import './Navbar.css'

export default function Navbar(){
    return(
        <nav className='bg-[rgb(0,0,0)] text-light navbar' id='nav-bar'>

            <NavLink className='navbar-brand text-light text-2xl' to='/'>AeroSkyMart</NavLink>

            <div className='d-flex ms-auto' id='nav-content'>

                    <ul className='d-flex'>
                        <li className='nav-item me-4 row'>
                            <FaHome className='col-6'/>
                            <NavLink to='/' className={'nav-link col-6'}>Home</NavLink>
                        </li>
                        <li className='nav-item me-4 row'>
                            <BiStore className='col-6'/>
                            <NavLink to='/store' className={'nav-link col-6'}>Store</NavLink>
                        </li>
                        <li className='nav-item me-4 row'>
                            <AiOutlineShoppingCart className='col-6'/>
                            <NavLink to='/cart' className={'nav-link col-6'}>Cart</NavLink>
                        </li>
                    </ul>             

                    <ul className='d-flex'>
                        <li className='nav-item me-4 row'>
                            <NavLink to='/login' className={'nav-link col-6'}>LogIn</NavLink>
                            <AiOutlineLogin className='col-6'/>
                        </li>
                        <li className='nav-item me-4 row'>
                            <NavLink to='/signup' className={'nav-link col-6'}>SignUp</NavLink>
                            <AiOutlineUserAdd className='col-6'/>
                        </li>
                    </ul>
                
            </div>
        </nav>
    )
}