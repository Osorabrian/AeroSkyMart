import React from 'react'
import './profile.css'
import { MdAddAPhoto } from "react-icons/md";
import profile_pic from '../images/greencqard (2).JPG'

export default function Profile(){
    return(
        <div>
            <div id='profile-picture-div'>
                <img src={profile_pic} alt='profile pic' id='profile-picture'/>
                <MdAddAPhoto id='change-profile-picture-icon' className='text-2xl fill-[#ff9800]'/>
            </div>
        </div>
    )
}