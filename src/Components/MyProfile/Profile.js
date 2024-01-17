import React from 'react'
import './profile.css'
import { MdAddAPhoto } from "react-icons/md";
import { IoPencilOutline } from "react-icons/io5";
import profile_pic from '../images/greencqard (2).JPG'

export default function Profile(){
    return(
        <div>
            <div id='profile-picture-div' className='my-4'>
                <img src={profile_pic} alt='profile pic' id='profile-picture'/>
                <MdAddAPhoto id='change-profile-picture-icon' className='text-2xl fill-[#ff9800]'/>
            </div>

            <div className='me-4'>
                <IoPencilOutline className='ms-auto text-2xl'/>
            </div>

            <div className='text-left ms-4 mb-5'>

                <p className='text-4xl font-bold'>Brian Osora</p>

                <div className='my-2'>
                    <p className='text-[grey] font-bold text-lg'>Email</p>
                    <p className='text-md'>osorabrian@gmail.com</p>
                </div>

                <div className='my-2'>
                    <p className='text-[grey]  font-bold text-lg'>Phone Number</p>
                    <p className='text-md'>+254746451952</p>
                </div>

                <div className='my-2'>
                    <p className='text-[grey] font-bold text-lg'>Address </p>
                    <p className='text-md'>Home</p>
                    <p className='text-sm text-[#318CE7]'>Nairobi, South C, Kawi House.</p>
                </div>

            </div>
        </div>
    )
}