import React from "react";
import './footer.css'
import {TfiEmail} from 'react-icons/tfi'
import {PiPhoneCallThin} from 'react-icons/pi'
import {BsBoxArrowUpRight} from 'react-icons/bs'
import {BsMeta} from 'react-icons/bs'
import {BsYoutube} from 'react-icons/bs'
import {PiInstagramLogoLight} from 'react-icons/pi'
import {BsTwitter} from 'react-icons/bs'

export default function Footer(){

    const socials = [{logo: BsMeta, color: '#0081FB'},
                    {logo: BsYoutube, color: 'rgb(255,0,0)'},
                    {logo: BsTwitter, color: '#1DA1F2'}, 
                    {logo: PiInstagramLogoLight, color: '#C13584'}
                    ]

    return(
        <div id="footer-div">
            <div>
                <h1>This is the footer</h1>
                <div className="flex justify-between text-light">

                    <div>
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

                    <div>
                        <h1>About</h1>
                    </div>

                    <div>
                        <h1>Socials</h1>

                        <div className="flex m-2">
                            {socials.map((social, index)=> {
                                return < social.logo className={`text-[${social.color}] my-auto m-2`} key={index}/>
                            })} 
                        </div>

                    </div>

                    <div>
                        <h1></h1>
                    </div>
                </div>
            </div>
        </div>
)
}