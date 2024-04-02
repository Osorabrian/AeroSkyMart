import React,{useState} from 'react'
import { MdOutlineNotificationsPaused } from 'react-icons/md'
import {useNavigate} from 'react-router-dom'

export default function EditProfile(){

    const navigate = useNavigate()
    const [address, setAdress] = useState('')
    const [enterAddress, setEnterAdress] = useState('')

    return(
        <div>

            <h1 className='text-3xl font-bold mt-4 mx-auto'>Edit Profile</h1>

            <form className='text-left m-3 mx-auto' id='edit_profile_form'>

                <div className='flex my-4'>

                    <div className='me-3'>
                        <label className='form-label'>First Name</label>
                        <input type='text' placeholder='first name' className='form-control'/>
                    </div>

                    <div>
                        <label className='form-label'>Last Name</label>
                        <input type='text' placeholder='last name' className='form-control'/>
                    </div>

                </div>

                <div className='flex my-4'>
                    <div className=''>
                        <label className='form-label'>Email</label>
                        <input type='email' placeholder='example@gmail.com'className='form-control'/>
                    </div>

                    <div className='ms-3'>
                        <label className='form-label'>Phone Number</label>
                        <input type='number' placeholder='0746451952' className='form-control'/>
                    </div>
                </div>

                <div className='my-4'>
                   <p>Address</p> 
                   <p className='form-text mb-2'>Select how to enter you address</p>

                    <div className='mx-4 my-2 '>
                        <input type='radio' className='me-2' name='address' value='manual' onClick={(e) => setEnterAdress(e.target.value)}/>   
                        <label>Manually Enter Address</label><br></br>  
                            {enterAddress === 'manual' && (
                                <>
                                    <input type='text' placeholder='Enter Address' className='form-control'/><br></br>
                                </>
                            )} 
                    </div>

                    <div className='mx-4 my-2'>
                        <input type='radio' className='me-2' name='address' value='automatic' onClick={(e) => setEnterAdress(e.target.value)}/>
                        <label>Set Current Adress</label>
                            {enterAddress === 'automatic' && (
                                <p>Your current address is {address}</p>
                            )}
                    </div>

                </div>

                <div className='justify-between flex mx-5 my-5'>
                    <button className='btn btn-danger rounded-none' onClick={() => navigate('/my_profile')}>Cancel</button>
                    <button type='submit' className='btn bg-[#4cbb17] text-white rounded-none'>Update</button>
                </div>

            </form>
        </div>
    )
}