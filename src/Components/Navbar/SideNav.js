import React from "react";
import { NavLink } from "react-router-dom";
import {FaHome} from 'react-icons/fa'
import { FaShippingFast } from "react-icons/fa";
import {BiStore} from 'react-icons/bi'
import {AiOutlineLogin, AiOutlineShoppingCart, AiOutlineUserAdd} from 'react-icons/ai'
import { CiCircleChevDown } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { RiLogoutCircleLine } from "react-icons/ri";
import profile_pic from '../images/greencqard (2).JPG'
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

                <li>
                    <NavLink className={'flex dropdown-item bg-black nav-link'}>
                        <FaShippingFast className="my-auto me-1"/>
                        My Orders
                    </NavLink>
                </li>
                <hr></hr>

                <li>
                    <NavLink className={'flex dropdown-item bg-black nav-link'}>
                        <CiBookmark className="my-auto me-1"/>
                        My Wishlist
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

                <li className='nav-item dropdown'>

                    <NavLink className={'flex nav-link'} role="button" data-bs-toggle='dropdown' aria-expanded='false'>
                        <img src={profile_pic} alt='profile' className="me-2" id='profile-pic'/>
                        Brian Osora
                        <CiCircleChevDown className="my-auto ms-2 text-xl"/>
                    </NavLink>

                    <ul className="dropdown-menu bg-black" id='dropdown-menu'>

                        <li className="nav-item">
                            <NavLink className={'flex dropdown-item bg-black nav-link'}>
                                <CiUser className="my-auto me-2"/>
                                View Profile
                            </NavLink>
                        </li>
                        <hr className="text-[white]"></hr>

                        <li>
                            <NavLink className={'flex dropdown-item bg-black nav-link'}>
                                <CiSettings className="my-auto me-2"/>
                                Settings
                            </NavLink>
                        </li>
                        <hr className="text-[white]"></hr>

                        <li>
                            <NavLink className={'flex dropdown-item bg-black nav-link'}>
                                <RiLogoutCircleLine className="my-auto me-2"/>
                                Log Out
                            </NavLink>
                        </li>

                    </ul>
                </li>

            </ul>
    )
}