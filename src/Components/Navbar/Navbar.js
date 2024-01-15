import React, {useState} from 'react'
import {FaHome} from 'react-icons/fa'
import {BiStore} from 'react-icons/bi';
import { CiSearch } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";
import {AiOutlineLogin, AiOutlineShoppingCart, AiOutlineUserAdd} from 'react-icons/ai'
import {CiMenuBurger} from 'react-icons/ci'
import logo from '../images/plane.png'
import {NavLink, useNavigate} from 'react-router-dom'
import SideNav from './SideNav'
import './Navbar.css'

export default function Navbar(){

    const [sideMenu, setSideMenu] = useState(false)
    let navigate = useNavigate()

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
                    </div>

                </div>          
            </nav>

           { sideMenu && (
            <SideNav closeSideNav={closeSideNav}/> )
           }
        </>
    )
}