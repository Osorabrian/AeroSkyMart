import React from 'react'
import {FaHome} from 'react-icons/fa'
import {BiStore} from 'react-icons/bi'
import {AiOutlineLogin, AiOutlineShoppingCart, AiOutlineUserAdd} from 'react-icons/ai'
import logo from '../images/plane.png'
import {NavLink} from 'react-router-dom'
import './Navbar.css'

export default function Navbar(){
    return(
        <nav className='bg-[rgb(0,0,0)] text-light navbar font-roboto' id='nav-bar'>

            <NavLink className='navbar-brand text-light text-2xl me-auto row' to='/'>
                <img src={logo} alt='logo'id='logo' className='col-6 -mt-1'/>
                <span className='col-6 -ml-4 font-roboto'>AeroSkyMart</span>
            </NavLink>

            <div className='mx-auto d-flex nav-content text-xl'>
                    <ul className='d-flex'>
                        <li className='nav-item row'>
                            <FaHome className='col-6 mt-1'/>
                            <NavLink to='/' className={'nav-link col-6'}>Home</NavLink>
                        </li>
                        <li className='nav-item ms-4 row'>
                            <BiStore className='col-6 mt-1'/>
                            <NavLink to='/store' className={'nav-link col-6'}>Store</NavLink>
                        </li>
                        <li className='nav-item ms-4 row'>
                            <AiOutlineShoppingCart className='col-6 mt-1'/>
                            <NavLink to='/cart' className={'nav-link col-6'}>Cart</NavLink>
                        </li>
                    </ul>            
            </div>

            <div className='ms-auto d-flex nav-content text-xl'>
                    <ul className='d-flex'>
                        <li className='nav-item row'>
                            <NavLink to='/login' className={'nav-link col-6'}>LogIn</NavLink>
                            <AiOutlineLogin className='col-6 mt-1'/>
                        </li>
                        <li className='nav-item  ms-4 row'>
                            <NavLink to='/signup' className={'nav-link col-7'}>SignUp</NavLink>
                            <AiOutlineUserAdd className='col-5 mt-1'/>
                        </li>
                    </ul>
            </div>

        </nav>
    )
}