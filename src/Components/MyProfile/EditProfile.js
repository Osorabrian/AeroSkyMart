import React,{useState} from 'react'
import { GoPlus } from "react-icons/go";
import { LiaTimesSolid } from "react-icons/lia";
import {useNavigate} from 'react-router-dom'

export default function EditProfile(){

    const navigate = useNavigate()
    const [address, setAdress] = useState('')
    const [enterAddress, setEnterAdress] = useState('')
    const [addAddress, setAddAddress] = useState(false)

    return(
        <div className='m-3'>

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

                    <div className='flex'>
                        <p>Address</p>
                        {!addAddress ? (
                        <span className='flex ms-auto cursor-pointer' onClick={() => setAddAddress(true)}>
                                <GoPlus className='my-auto text-2xl'/>
                                <p className='me-4'>Add Address</p>
                        </span> ):(
                        <span className='flex ms-auto cursor-pointer' onClick={() => setAddAddress(false)}>
                                <LiaTimesSolid className='my-auto text-2xl text-[red]'/>
                                <p className='me-4'>Cancel</p>
                        </span>)
                        }
                    </div>

                    { addAddress ? (
                        <form className='my-3'>

                            <p className='form-text mb-2'>Select how to enter you address</p>

                            <div className='mx-4 my-2 '>
                                <input type='radio' className='me-2' id='manual' name='address' value='manual' onClick={(e) => setEnterAdress(e.target.value)}/>   
                                <label for='manual'>Manually Enter Address</label><br></br>  
                                    {enterAddress === 'manual' && (
                                        <>
                                            <input type='text' placeholder='Name of Address' className='form-control my-2'/>
                                            <textarea rows={2} type='text' placeholder='Enter Address' className='form-control'/><br></br>
                                        </>
                                    )} 
                            </div>

                            <div className='mx-4 my-2'>
                                <input type='radio' className='me-2' id='automatic-address' name='address' value='automatic' onClick={(e) => setEnterAdress(e.target.value)}/>
                                <label for='automatic-address'>Set Current Adress</label>
                                    {enterAddress === 'automatic' && (
                                        <>
                                            <input type='text' placeholder='Name of Address' className='form-control my-2'/>
                                            <p>Your current address is {address}</p>
                                        </>
                                    )}
                            </div>

                            <div className='text-center my-4'>        
                                <button className='bg-[black] text-[white] border-0 px-3 py-2'>Add Address</button>
                            </div>

                        </form>
                        ):(
                        <>
                            <div className='p-3 shadow-lg my-3'>
                                <p className='text-[#318CE7]'>Home</p>
                                <p className='text-sm'>Canaan Lane, Muigai Estate, Kitengela, Kajiado County, Kenya.</p>
                            </div>

                            <div className='p-3 shadow-lg my-3'>
                                <p className='text-[#318CE7]'>Work</p>
                                <p className='text-sm'>Kawi House, South C, Nairobi County, Kenya.</p>
                            </div>
                        
                            <div className='justify-between flex mx-2 my-5'>
                                <button className='btn btn-danger rounded-none' onClick={() => navigate('/my_profile')}>Cancel</button>
                                <button type='submit' className='btn bg-[#4cbb17] text-white rounded-none'>Update</button>
                            </div>
                        </>
                )}

            </form>
        </div>
    )
}