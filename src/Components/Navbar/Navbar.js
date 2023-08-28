import React from 'react'
import {FaHome} from 'react-icons/fa'
import {BiStore} from 'react-icons/bi'
import {AiOutlineLogin, AiOutlineShoppingCart, AiOutlineUserAdd} from 'react-icons/ai'
import logo from '../images/plane.png'
import {NavLink} from 'react-router-dom'
import './Navbar.css'

export default function Navbar(){
    return(
        <nav className='bg-[rgb(0,0,0)] text-light navbar font-roboto navbar-expand-lg' id='nav-bar'>
            <div className='container-fluid'>

            <NavLink className='navbar-brand text-light text-2xl me-auto row' to='/'>
                <img src={logo} alt='logo'id='logo' className='col-6 -mt-2'/>
                <span className='col-6 -ml-4 font-roboto'>AeroSkyMart</span>
            </NavLink>

            {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

                <div className="collapse navbar-collapse" id="navbarNav">

                            <ul className='navbar-nav mx-auto d-flex nav-content text-xl text-light'>
                                <li className='nav-item row'>
                                    <FaHome className='col-6 mt-2'/>
                                    <NavLink to='/' className={'nav-link col-6'}>Home</NavLink>
                                </li>
                                <li className='nav-item ms-4 row'>
                                    <BiStore className='col-6 mt-2'/>
                                    <NavLink to='/store' className={'nav-link col-6'}>Store</NavLink>
                                </li>
                                <li className='nav-item ms-4 row'>
                                    <AiOutlineShoppingCart className='col-6 mt-2'/>
                                    <NavLink to='/cart' className={'nav-link col-6'}>Cart</NavLink>
                                </li> 
                            </ul>  

                            <ul className='navbar-nav d-flex ms-auto'>
                                        <li className='nav-item row'>
                                            <NavLink to='/login' className={'nav-link col-6'}>LogIn</NavLink>
                                            <AiOutlineLogin className='col-6 mt-2'/>
                                        </li>
                                        <li className='nav-item  ms-4 row'>
                                            <NavLink to='/signup' className={'nav-link col-7'}>SignUp</NavLink>
                                            <AiOutlineUserAdd className='col-5 mt-2'/>
                                        </li>
                            </ul>
                </div> */}
            </div>          
        </nav>
    )
}