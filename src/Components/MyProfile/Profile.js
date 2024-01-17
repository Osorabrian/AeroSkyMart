import React, {useRef, useState}from 'react'
import { useNavigate } from 'react-router-dom';
import './profile.css'
import { MdAddAPhoto } from "react-icons/md";
import { IoPencilOutline } from "react-icons/io5";
import profile_pic from '../images/greencqard (2).JPG'

export default function Profile(){

    const inputRef = useRef()
    const navigate = useNavigate()
    const [profile, setProfile] = useState('')

    function handleClick(){
        inputRef.current.click()
    }

    function handleChange(e){
        setProfile(e.target.value)
    }

    return(
        <div>
            <div id='profile-picture-div' className='my-4'>
                <img src={profile_pic} alt='profile pic' id='profile-picture'/>
                <input type='file' onChange={handleChange} ref={inputRef} style={{display: 'none'}}/>
                <MdAddAPhoto onClick={handleClick}  id='change-profile-picture-icon' className='text-2xl fill-[#ff9800]'/>
            </div>

            <div className='me-4'>
                <IoPencilOutline className='ms-auto text-2xl' onClick={() => navigate('/edit_profile')}/>
            </div>

            <div className='text-left ms-4 mb-5'>

                <p className='text-4xl font-bold flex flex-wrap'>Brian Osora</p>

                <div className='my-2'>
                    <p className='text-[grey] font-bold text-lg'>Email</p>
                    <p className='text-md flex flex-wrap'>osorabrian@gmail.com</p>
                </div>

                <div className='my-2'>
                    <p className='text-[grey]  font-bold text-lg'>Phone Number</p>
                    <p className='text-md flex flex-wrap'>+254746451952</p>
                </div>

                <div className='my-2'>
                    <p className='text-[grey] font-bold text-lg'>Address </p>
                    <p className='text-md flex flex-wrap'>Home</p>
                    <p className='text-sm text-[#318CE7] flex flex-wrap'>Nairobi, South C, Kawi House.</p>
                </div>

            </div>
        </div>
    )
}