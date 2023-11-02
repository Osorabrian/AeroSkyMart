import React from "react";
import './footer.css'
import logo from '../images/plane.png'
import Customer from "./Customer";
import Account from "./Account";
import General from "./General";
import Socials from "./Socials";
import {Link} from 'react-router-dom'

export default function Footer(){
    return(
        <div id="footer-div">
            
                <div className="flex flex-wrap justify-between text-light text-left">

                    <Link className="flex m-4" to='/'>
                        <img src={logo} alt='logo'id='logo' style={{width: '50px', height: '30px'}}/>
                        <span className='font-roboto text-xl ms-2'>AeroSkyMart</span>
                    </Link>

                    <Account/>
                    <Customer/>
                    <General/>
                    <Socials/>

                </div>
            
        </div>
)
}