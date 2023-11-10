import React from "react";
import { NavLink } from "react-router-dom";
import {FaHome} from 'react-icons/fa'
import {BiStore} from 'react-icons/bi'
import {AiOutlineLogin, AiOutlineShoppingCart, AiOutlineUserAdd} from 'react-icons/ai'
import './Navbar.css'

export default function SideNav({closeSideNav}){

    function closeNav(){
        closeSideNav()
    }


    return(
            <ul id='side-nav' className="text-light text-xl">

                <hr></hr>

                <li className='nav-item'>
                    <NavLink to='/' className={'nav-link flex'} onClick={closeNav}>
                        <FaHome className='my-auto me-1'/>
                        Home
                    </NavLink>
                </li>
                <hr></hr>

                <li className='nav-item'>
                    <NavLink to='/store' className={'nav-link flex'} onClick={closeNav}>
                        <BiStore className='my-auto me-1'/>
                        Store
                    </NavLink>
                </li>
                <hr></hr>

                <li className='nav-item'>
                    <NavLink to='/cart' className={'nav-link flex'} onClick={closeNav}>
                        <AiOutlineShoppingCart className='my-auto me-1'/>
                        Cart
                    </NavLink>
                </li>
                <hr></hr>

                <li className='nav-item'>
                    <NavLink to='/login' className={'nav-link flex'} onClick={closeNav}>
                        <AiOutlineLogin className='my-auto me-1'/>
                        Login
                    </NavLink>
                </li> 
                <hr></hr>  

                <li className='nav-item'>
                    <NavLink to='/signup' className={'nav-link flex'} onClick={closeNav}>
                        <AiOutlineUserAdd className='my-auto me-1'/>
                        SignUp
                    </NavLink>
                </li>
                <hr></hr>

            </ul>
    )
}