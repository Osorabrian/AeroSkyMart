import React, {useState} from 'react'
import {FaHome} from 'react-icons/fa'
import {BiStore} from 'react-icons/bi'
import {AiOutlineLogin, AiOutlineShoppingCart, AiOutlineUserAdd} from 'react-icons/ai'
import {CiMenuBurger} from 'react-icons/ci'
import logo from '../images/plane.png'
import {NavLink} from 'react-router-dom'
import SideNav from './SideNav'
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

                <button id='side-menu' onClick={() => setSideMenu(!sideMenu)}>
                    <CiMenuBurger className='text-2xl me-5'/>   
                </button>

                <NavLink className='navbar-brand text-light text-2xl me-auto flex' to='/'>
                    <img src={logo} alt='logo'id='logo' style={{padding:'0px 12px'}}/>
                    <span className='font-roboto'>AeroSkyMart</span>
                </NavLink>

                    <div className='horizontal-nav navbar mx-auto flex text-xl text-light'>

                            <NavLink to='/' className={'nav-link flex me-5'}>
                                <FaHome className='my-auto me-1'/>
                                Home
                            </NavLink>

                            <NavLink to='/store' className={'nav-link flex me-5'}>
                                <BiStore className='my-auto me-1'/>
                                Store
                            </NavLink>

                            <NavLink to='/cart' className={'nav-link flex me-5'}>
                                <AiOutlineShoppingCart className='my-auto me-1'/>
                                Cart
                            </NavLink>

                    </div>  

                    <div className='horizontal-nav navbar flex ms-auto text-xl'>

                            <NavLink to='/login' className={'nav-link flex me-5'}>
                                <AiOutlineLogin className='my-auto me-1'/>
                                Login
                            </NavLink>

                            <NavLink to='/signup' className={'nav-link flex me-2'}>
                                <AiOutlineUserAdd className='my-auto me-1'/>
                                SignUp
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