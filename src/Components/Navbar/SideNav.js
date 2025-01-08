import React, {useState} from "react";
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

    const [logIn, setLogIn] = useState(true)

    function closeNav(){
        closeSideNav()
    }

    return(
            <ul id='side-nav' className="text-light text-xl">

                <hr></hr>

                <li className='nav-item'>
                    <NavLink to='/store' className={'nav-link flex'} onClick={closeNav} >
                        Store
                    </NavLink>
                </li>
                <hr></hr>

                <li className='nav-item'>
                    <NavLink to='/cart' className={'nav-link flex'} onClick={closeNav}>
                        Cart
                    </NavLink>
                </li>
                <hr></hr>

                <li>
                    <NavLink className={'flex dropdown-item bg-black nav-link'}>
                        My Orders
                    </NavLink>
                </li>
                <hr></hr>

                {logIn === false ? (
                    <>
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
                    </>
                ):(
                <li className='nav-item dropdown'>

                    <NavLink className={'flex nav-link'} role="button" data-bs-toggle='dropdown' aria-expanded='false'>
                        <img src={profile_pic} alt='profile' className="me-2" id='profile-pic'/>
                        Brian Osora
                        <CiCircleChevDown className="my-auto ms-1 text-xl"/>
                    </NavLink>

                    <ul className="dropdown-menu bg-black" id='dropdown-menu'>

                        <li className="nav-item">
                            <NavLink className={'flex dropdown-item bg-black nav-link'} to='/my_profile'>
                                View Profile
                            </NavLink>
                        </li>
                        <hr className="text-[white]"></hr>

                        <li>
                            <NavLink className={'flex dropdown-item bg-black nav-link'}>
                                My Orders
                            </NavLink>
                        </li>
                        <hr></hr>

                        <li className='nav-item'>
                            <NavLink className={'flex dropdown-item bg-black nav-link'} to={'/wishlist'}>
                                My Wishlist
                            </NavLink>
                        </li>
                        <hr className='text-[white]'></hr>

                        <li>
                            <NavLink className={'flex dropdown-item bg-black nav-link'}>
                                Settings
                            </NavLink>
                        </li>
                        <hr className="text-[white]"></hr>

                        <li>
                            <NavLink className={'flex dropdown-item bg-black nav-link'} to={'/'} onClick={() => setLogIn(false)}>
                                Log Out
                            </NavLink>
                        </li>

                    </ul>
                </li>
                )}

            </ul>
    )
}