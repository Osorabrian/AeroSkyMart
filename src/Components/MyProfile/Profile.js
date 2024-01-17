import React from 'react'
import './profile.css'
import { MdAddAPhoto } from "react-icons/md";
import profile_pic from '../images/greencqard (2).JPG'

export default function Profile(){
    return(
        <div>
            <div id='profile-picture-div' className='my-4'>
                <img src={profile_pic} alt='profile pic' id='profile-picture'/>
                <MdAddAPhoto id='change-profile-picture-icon' className='text-2xl fill-[#ff9800]'/>
            </div>
            <div className='text-left ms-4'>

                <p className='text-4xl font-bold'>Brian Osora</p>

                <div className='my-2'>
                    <p className='text-[grey] text-bold'>Email</p>
                    <p className='font-semibold'>osorabrian@gmail.com</p>
                </div>

                <div className='my-2'>
                    <p className='text-[grey] text-bold'>Phone Number</p>
                    <p className='font-semibold'>+254746451952</p>
                </div>

                <div className='my-2'>
                    <p className='text-[grey] text-bold'>Address </p>
                    <p className='font-semibold'>Home</p>
                    <p>Nairobi, South C, Kawi House.</p>
                </div>

            </div>
        </div>
    )
}