import React from "react";
import {BsMeta} from 'react-icons/bs'
import {BsYoutube} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {Link} from "react-router-dom";


export default function Socials(){

    const socials = [{logo: BsMeta, link: 'https://www.facebook.com/'},
    {logo: BsYoutube, link: 'https://www.youtube.com/'},
    {logo: BsTwitter, link: 'https://twitter.com/'}, 
    {logo: BsInstagram, link: 'https://www.instagram.com/'}
    ]

    return(
        <div className="m-3">
            <h1 className="text-lg font-semibold">Socials</h1>
            <div className="flex flex-wrap m-2">
                {socials.map((social, index)=> {
                    return(
                        <Link to={social.link} key={index}>
                            <social.logo className={`text-[${social.color}] my-auto me-3 mb-2 mt-1 text-xl bg-slate-500 p-1 rounded-xl`} />
                        </Link>
                    )
                })} 
            </div>
        </div>
    )
}