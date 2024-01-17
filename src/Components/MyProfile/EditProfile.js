import React from 'react'
import {useNavigate} from 'react-router-dom'

export default function EditProfile(){

    const navigate = useNavigate()

    return(
        <div>

            <h1 className='text-3xl font-bold mt-4'>Edit Profile</h1>

            <form className='text-left m-3'>

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
                    <label className='form-label'>Adress</label>
                    <input type='text' placeholder='Enter Adress' className='form-control'/>
                </div>

                <div className='justify-between flex mx-5 my-5'>
                    <button className='btn btn-danger rounded-none' onClick={() => navigate('/my_profile')}>Cancel</button>
                    <button type='submit' className='btn bg-[#4cbb17] text-white rounded-none'>Update</button>
                </div>

            </form>
        </div>
    )
}