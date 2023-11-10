import React from "react";
import './footer.css'
import logo from '../images/plane.png'
import Customer from "./Customer";
import Account from "./Account";
import General from "./General";
import Socials from "./Socials";
import {Link} from 'react-router-dom'

export default function Footer(){

    const date = new Date()

    return(
        <div id="footer-div">
            
                <div className="flex flex-wrap justify-between text-light text-left">

                    <Link className="flex mt-3 ms-1 mb-2" to='/'>
                        <img src={logo} alt='logo'id='logo' style={{padding: '0px 12px'}} className="my-auto"/>
                        <span className='font-roboto text-xl'>AeroSkyMart</span>
                    </Link>

                    <Account/>
                    <Customer/>
                    <General/>
                    <Socials/>

                </div>

                <p className="bg-[rgb(0,0,0)] text-light">&copy; Copyright {date.getFullYear()},  AeroSkyMart | All Rights Reserved.</p>
            
        </div>
)
}