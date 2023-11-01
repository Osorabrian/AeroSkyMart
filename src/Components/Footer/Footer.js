import React from "react";
import './footer.css'
import {TfiEmail} from 'react-icons/tfi'
import {PiPhoneCallThin} from 'react-icons/pi'
import {BsBoxArrowUpRight} from 'react-icons/bs'
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

    return(
        <div id="footer-div">
            
                <div className="flex flex-wrap justify-between text-light text-left">

                    <div className="flex-wrap m-3">
                        <h1>Contacts</h1>

                        <div className="flex m-2">
                            <BsBoxArrowUpRight className='my-auto'/>
                            <span className="my-auto ms-2">Contact Us Page</span>
                        </div>

                        <div className="flex m-2">
                            <TfiEmail className="my-auto"/>
                            <span className="my-auto ms-2">info@aeroskymart.com</span>
                        </div>

                        <div className="flex m-2">
                            <PiPhoneCallThin className="my-auto"/>
                            <span className="m-auto ms-2">+254712345678</span>
                        </div>


                    </div>

                    <div className="m-3">
                        <h1>About</h1>
                    </div>

                    <div className="m-3">
                        <h1>Socials</h1>

                        <div className="flex flex-wrap m-2">
                            {socials.map((social, index)=> {
                                return(
                                    <Link to={social.link} key={index}>
                                        <social.logo className={`text-[${social.color}] my-auto m-2`} />
                                    </Link>
                                )
                            })} 
                        </div>

                    </div>

                    <div>
                        <h1></h1>
                    </div>
                </div>
            
        </div>
)
}