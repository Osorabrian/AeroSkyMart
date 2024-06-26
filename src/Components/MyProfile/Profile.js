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
        <div className=''>
            
            <div id='profile-picture-div' className='my-4'>
                <img src={profile_pic} alt='profile pic' id='profile-picture'/>
                <input type='file' onChange={handleChange} ref={inputRef} style={{display: 'none'}} accept='image/*' />
                <MdAddAPhoto onClick={handleClick}  id='change-profile-picture-icon' className='text-2xl fill-[#ff9800] hover:cursor-pointer' />
            </div>

            <div id='profile-details'>

                <div className='justify-end flex cursor-pointer me-3' onClick={() => navigate('/edit_profile')} >
                    <IoPencilOutline className='text-2xl my-auto me-1'/>
                    <p className='me-1'>Edit Profile</p>
                </div>

                <div className='text-left ms-4 mb-5'>

                    <p className='text-4xl font-bold flex flex-wrap'>Brian Osora</p>

                    <div className='my-3'>
                        <p className='text-[grey] font-bold text-lg'>Email</p>
                        <p className='text-md flex flex-wrap'>osorabrian@gmail.com</p>
                    </div>

                    <div className='my-3'>
                        <p className='text-[grey]  font-bold text-lg'>Phone Number</p>
                        <p className='text-md flex flex-wrap'>+254746451952</p>
                    </div>

                    <div className='my-3'>
                        <p className='text-[grey] font-bold text-lg'>Address(es)</p>

                        <div className='shadow-lg p-3 my-3'>
                            <p className='text-md text-[#318CE7] flex flex-wrap'>Home</p>
                            <p className='text-sm flex flex-wrap'>Nairobi, South C, Kawi House.</p>
                        </div>

                        <div className='p-3 shadow-lg my-3'>
                            <p className='text-[#318CE7]'>Work</p>
                            <p className='text-sm'>Kawi House, South C, Nairobi County, Kenya.</p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}