import React, {useState} from "react";
import './footer.css'
import logo from '../images/plane.png'
import {TfiEmail} from 'react-icons/tfi'
import {PiPhoneCallThin} from 'react-icons/pi'
import {BsMeta} from 'react-icons/bs'
import {BsYoutube} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {Link} from "react-router-dom";

export default function Footer(){

    const socials = [{logo: BsMeta, color: '#0081FB', link: 'https://www.facebook.com/'},
                    {logo: BsYoutube, color: 'rgb(255,0,0)', link: 'https://www.youtube.com/'},
                    {logo: BsTwitter, color: '#1DA1F2', link: 'https://twitter.com/'}, 
                    {logo: BsInstagram, color: '#C13584', link: 'https://www.instagram.com/'}
                    ]

    const [user, setUser] = useState(false)


    return(
        <div id="footer-div">
            
                <div className="flex flex-wrap justify-between text-light text-left">

                    <div className="flex m-4">
                        <img src={logo} alt='logo'id='logo' style={{width: '50px', height: '30px'}}/>
                        <span className='font-roboto text-xl font-semibold'>AeroSkyMart</span>
                    </div>

                    <div className="flex-wrap m-3">
                        <h1 className="text-lg font-semibold">My Account</h1>
                        { user ? (
                                <div className="text-[#B2BEB5]">
                                    <p className="m-1">My Cart</p>
                                    <p className="m-1">My Orders</p>
                                    <p className="m-1">My Wishlist</p>
                                    <button className="m-2 btn bg-light text-dark rounded-none">
                                        Log Out
                                    </button>
                                </div>
                        ):(
                            <div className="mx-auto text-[#B2BEB5]">
                                <button className="m-3 btn bg-light text-dark rounded-none">
                                    Log In
                                </button>
                                <p>Don't have an Account ?</p>
                                <button className="m-3 btn bg-light text-dark rounded-none">
                                    Create Account
                                </button>
                            </div>
                        )}
                        
                    </div>

                    <div className="flex-wrap m-3">
                        <h1 className="text-lg font-semibold">Customer Support</h1>
                        <div className="text-[#B2BEB5]">
                            <p className="m-2">FAQs</p>
                            <p className="m-2">Shipping & Handling</p>
                            <p className="m-2">Terms & Conditions</p>
                            <p className="m-2">Privacy Policy</p>
                            <p className=" m-2">Contact Us</p>
                        </div>
                    </div>

                    <div className="m-3">
                        <h1 className="text-lg font-semibold">General</h1>

                        <div className="text-[#B2BEB5]">
                            <p className="m-2">About Us</p>
                            <p className="m-2">Contact Us</p>

                            <div className="flex m-2">
                                <TfiEmail className="my-auto"/>
                                <span className="my-auto ms-2">info@aeroskymart.com</span>
                            </div>

                            <div className="flex m-2">
                                <PiPhoneCallThin className="my-auto"/>
                                <span className="my-auto ms-2">+254712345678</span>
                            </div>
                        </div>

                    </div>

                    <div className="m-3">
                        <h1 className="text-lg font-semibold">Socials</h1>

                        <div className="flex flex-wrap m-2">
                            {socials.map((social, index)=> {
                                return(
                                    <Link to={social.link} key={index}>
                                        <social.logo className={`text-[${social.color}] my-auto m-2 text-xl`} />
                                    </Link>
                                )
                            })} 
                        </div>

                    </div>

                </div>
            
        </div>
)
}