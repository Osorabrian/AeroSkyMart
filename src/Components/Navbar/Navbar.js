import React from 'react'
import {FaHome} from 'react-icons/fa'
import {BiStore} from 'react-icons/bi'
import {AiOutlineLogin, AiOutlineShoppingCart, AiOutlineUserAdd} from 'react-icons/ai'
import {CiMenuKebab} from 'react-icons/ci'
import logo from '../images/plane.png'
import {NavLink} from 'react-router-dom'
import './Navbar.css'

export default function Navbar(){
    return(
        <nav className='bg-[rgb(0,0,0)] text-light navbar font-roboto navbar-expand-lg' id='nav-bar'>
            <div className='container-fluid'>

            <NavLink className='navbar-brand text-light text-2xl me-auto row' to='/'>
                <img src={logo} alt='logo'id='logo' className='col-6 -mt-1'/>
                <span className='col-6 -ml-4 font-roboto'>AeroSkyMart</span>
            </NavLink>

            {/* <nav className='navbar mx-auto d-flex text-xl text-light'>
                <li className='nav-item row'>
                    <FaHome className='col-6 mt-1'/>
                    <NavLink to='/' className={'nav-link col-6 -ms-2'}>Home</NavLink>
                </li>
                <li className='nav-item ms-4 row'>
                    <BiStore className='col-6 mt-1'/>
                    <NavLink to='/store' className={'nav-link col-6 -ms-2'}>Store</NavLink>
                </li>
                <li className='nav-item ms-4 row'>
                    <AiOutlineShoppingCart className='col-6 mt-1 text-3xl'/>
                    <NavLink to='/cart' className={'nav-link col-6 -ms-2 mt-1'}>Cart</NavLink>
                </li> 
            </nav>  

            <nav className='navbar d-flex ms-auto text-xl'>
                <li className='nav-item ms-4 row'>
                    <AiOutlineLogin className='col-5 mt-1 text-3xl'/>
                    <NavLink to='/login' className={'nav-link col-6 -ms-2 mt-1'}>Login</NavLink>
                </li>   
                <li className='nav-item ms-4 row'>
                    <AiOutlineUserAdd className='col-5 mt-1'/>
                    <NavLink to='/signup' className={'nav-link col-6 -ms-2'}>SignUp</NavLink>
                </li>    
            </nav>   */}

           
            <button>
                <CiMenuKebab/>   
            </button>
                       
            </div>          
        </nav>
    )
}