import React, {useState} from 'react'
import {FaHome} from 'react-icons/fa'
import { FaShippingFast } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import { CiCircleChevDown } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { RiLogoutCircleLine } from "react-icons/ri";
import {BiStore} from 'react-icons/bi';
import { CiSearch } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";
import {AiOutlineLogin, AiOutlineShoppingCart, AiOutlineUserAdd} from 'react-icons/ai'
import {CiMenuBurger} from 'react-icons/ci'
import logo from '../images/plane.png'
import {NavLink} from 'react-router-dom'
import SideNav from './SideNav'
import profile_pic from '../images/greencqard (2).JPG'
import './Navbar.css'

export default function Navbar(){

    const [sideMenu, setSideMenu] = useState(false)

    function closeSideNav(){
        setSideMenu(false)
    }

    return(
        <>
            <nav className='bg-[rgb(0,0,0)] text-light navbar font-roboto navbar-expand-lg' id='nav-bar'>
                <div className='container-fluid'>

                <button id='side-menu' onClick={() => setSideMenu(!sideMenu)} className='-ms-4 w-2/12 my-auto'>
                    <CiMenuBurger className='text-3xl w-12/12'/>   
                </button>

                <NavLink className='navbar-brand text-light text-2xl me-auto flex' to='/'>
                    <img src={logo} alt='logo'id='logo' style={{padding:'0px 12px'}}/>
                    <span className='font-roboto -ms-2'>AeroSkyMart</span>
                </NavLink>

                    <div className='horizontal-nav navbar mx-auto flex text-xl text-light'>

                            <NavLink to='/' className={'nav-link flex me-4'}>
                                <FaHome className='my-auto me-1'/>
                                Home
                            </NavLink>

                            <NavLink to='/store' className={'nav-link flex me-4'}>
                                <BiStore className='my-auto me-1'/>
                                Store
                            </NavLink>

                            <NavLink to='/cart' className={'nav-link flex me-4'}>
                                <AiOutlineShoppingCart className='my-auto me-1'/>
                                Cart
                            </NavLink>

                            <NavLink className={'nav-link flex me-4'}>
                                <FaShippingFast className="my-auto me-1"/>
                                My Orders
                            </NavLink>
                        
                    </div>  

                    <div className='horizontal-nav navbar flex ms-auto text-xl'>

                            <NavLink to='/login' className={'nav-link flex me-3'}>
                                <AiOutlineLogin className='my-auto me-1'/>
                                Login
                            </NavLink>

                            <NavLink to='/signup' className={'nav-link flex me-1'}>
                                <AiOutlineUserAdd className='my-auto me-1'/>
                                SignUp
                            </NavLink>
                            
                    </div>
                    
                    <div className='d-flex justify-content-end'>

                        <NavLink to='/store' className={'nav-link me-1'}>
                            <CiSearch id='search-icon' className='text-3xl cursor-pointer'/>
                        </NavLink>

                        <NavLink id='cart' className={'nav-link'} to={'/cart'}>
                            <PiShoppingCartThin id='cart-icon' className='text-3xl cursor-pointer' />
                            <div id='cart-count' className='p-1'>99+</div>
                        </NavLink>

                        <div className='nav-item dropdown text-xl' id='profile-dropdown'>

                            <NavLink className={'flex nav-link'} role="button" data-bs-toggle='dropdown' aria-expanded='false'>
                                <img src={profile_pic} alt='profile' className="me-2" id='profile-pic'/>
                                Brian Osora
                                <CiCircleChevDown className="my-auto ms-1 text-xl"/>
                            </NavLink>

                            <ul className="dropdown-menu bg-black text-xl" id='dropdown-menu'>

                                <li className="nav-item p-3">
                                    <NavLink className={'flex dropdown-item bg-black nav-link'}>
                                        <CiUser className="my-auto me-2"/>
                                        View Profile
                                    </NavLink>
                                </li>
                                <hr className="text-[white]"></hr>

                                <li className='nav-item p-3'>
                                <NavLink className={'dropdown-item bg-black nav-link flex me-4'} to='/wishlist'>
                                    <CiBookmark className="my-auto me-2"/>
                                    My Wishlist
                                </NavLink>
                                </li>
                                <hr className='text-white'></hr>

                                <li className='nav-item p-3'>
                                    <NavLink className={'flex dropdown-item bg-black nav-link'}>
                                        <CiSettings className="my-auto me-2"/>
                                        Settings
                                    </NavLink>
                                </li>
                                <hr className="text-[white]"></hr>

                                <li className='nav-item p-3'>
                                    <NavLink className={'flex dropdown-item bg-black nav-link'} to={'/'}>
                                        <RiLogoutCircleLine className="my-auto me-2"/>
                                        Log Out
                                    </NavLink>
                                </li>

                            </ul>
                        </div>

                    </div>

                </div>          
            </nav>

           { sideMenu && (
            <SideNav closeSideNav={closeSideNav}/> )
           }
        </>
    )
}