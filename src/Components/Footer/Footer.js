import React from "react";
import './footer.css'
import logo from '../images/plane.png'
import Customer from "./Customer";
import Account from "./Account";
import General from "./General";
import Socials from "./Socials";

export default function Footer(){
    return(
        <div id="footer-div">
            
                <div className="flex flex-wrap justify-between text-light text-left">

                    <div className="flex m-4">
                        <img src={logo} alt='logo'id='logo' style={{width: '50px', height: '30px'}}/>
                        <span className='font-roboto text-xl font-semibold'>AeroSkyMart</span>
                    </div>
                    
                    <Account/>
                    <Customer/>
                    <General/>
                    <Socials/>

                </div>
            
        </div>
)
}