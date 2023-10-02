import React from "react";
import { NavLink } from "react-router-dom";
import {FaHome} from 'react-icons/fa'
import {BiStore} from 'react-icons/bi'
import {AiOutlineLogin, AiOutlineShoppingCart, AiOutlineUserAdd} from 'react-icons/ai'
import './Navbar.css'

export default function SideNav(){
    return(
            <ul id='side-nav' className="text-light text-xl">
                <hr></hr>
                <li className='nav-item row'>
                    <FaHome className='col-6 mt-1'/>
                    <NavLink to='/' className={'nav-link col-6 -ms-11'}>Home</NavLink>
                </li>
                <hr></hr>
                <li className='nav-item row'>
                    <BiStore className='col-6 mt-1'/>
                    <NavLink to='/store' className={'nav-link col-6 -ms-11'}>Store</NavLink>
                </li>
                <hr></hr>
                <li className='nav-item row'>
                    <AiOutlineShoppingCart className='col-6 mt-1 text-2xl'/>
                    <NavLink to='/cart' className={'nav-link col-6 -ms-11 mt-1'}>Cart</NavLink>
                </li>
                <hr></hr>
                <li className='nav-item row'>
                    <AiOutlineLogin className='col-5 mt-1 text-2xl ms-2'/>
                    <NavLink to='/login' className={'nav-link col-6 -ms-9 mt-1'}>Log In</NavLink>
                </li>   
                <hr></hr>
                <li className='nav-item row'>
                    <AiOutlineUserAdd className='col-5 mt-1 ms-2'/>
                    <NavLink to='/signup' className={'nav-link col-6 -ms-9'}>Sign Up</NavLink>
                </li>
                <hr></hr>
            </ul>
    )
}