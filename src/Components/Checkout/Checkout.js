import React, {useState} from 'react'
import { BsPaypal } from "react-icons/bs";
// import { PiCreditCardThin } from "react-icons/pi";
import { IoBagCheckOutline } from "react-icons/io5";
import { FaApple } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FaCcMastercard } from "react-icons/fa6";
import mpesa from '../images/mpesa logo.png'
import './checkout.css'
import { Link } from 'react-router-dom';

export default function Checkout(){

    const [paymentType, setPaymentType] = useState('debit/credit')

    return(
        <div>

            <div className='text-left mt-4' id='amount-info'>
                <p className='text-sm font-bold text-[grey]'>TOTAL AMOUNT</p>
                <p className='text-2xl text-[#ff9800]'>$1,2000,000.00</p>
                <h1 className='my-3 text-3xl ms-2'>Payment Types</h1>
            </div>

            <div id='payment-types' className='mb-4'>

                {/* <div className='justify-center flex border-1 border-[black] my-3 p-2' onClick={() => setPaymentType('debit/credit')}>
                        <PiCreditCardThin className='my-auto me-1'/>
                        Debit/Credit Card
                </div> */}

                <div className='justify-center flex border-1 border-[#4285F4] my-3 p-2 text-[white] bg-[#4285f4]' onClick={() => setPaymentType('google pay')}>
                        <FcGoogle className='my-auto text-lg me-1'/>
                        Pay
                </div>

                <div className='justify-center flex border-1 border-[#228B22] my-3 p-2' onClick={() => setPaymentType('mpesa')}>
                        <img src={mpesa} alt='mpesa' style={{height: '35px'}} />
                </div>

                <div className='justify-center flex border-1 border-[black] my-3 p-2 text-[white] bg-[black]' onClick={() => setPaymentType('apple pay')}>
                        <FaApple className='text-lg me-1 fill-[white]'/>
                        Pay
                </div>

                <div className='justify-center flex border-1 border-[#ffc43a] my-3 p-2 bg-[#ffc43a]' onClick={() => setPaymentType('paypal')}>
                        <BsPaypal className='my-auto fill-[#253b80] me-1'/>
                        <div>
                            <i className='text-[#253b80] font-extrabold'>pay</i>
                            <i className='text-[#179bd7] font-extrabold'>Pal</i>
                        </div>
                </div>

            </div>

            <div className='flex' id='divider'>
                <hr className='w-5/12 my-auto ms-2 me-2'></hr>
                <p>or</p>
                <hr className='w-5/12 my-auto ms-2'></hr>
            </div>

            <div id='card-form' className='mt-2'>
                <form className='text-left p-3'>

                    <label className='form-label'>Card Number</label>
                    <div className='input-group'>
                        <input type='text'pattern='[0-9]' placeholder='Card Number' className='form-control'/>
                        <span>
                            <FaCcMastercard className='mt-auto'/>
                        </span>
                    </div>

                    <div className='flex my-3'>

                        <div className='w-8/12'>
                            <label>Expires</label>
                            <input type='month' placeholder='' className='form-control'/>
                        </div>

                        <p className='w-1/12 mt-auto ms-1 text-3xl'>/</p>

                        <div className='w-4/12 -ms-4'>
                            <label>CVV</label>
                            <input type='number' placeholder='cvv' className='form-control'/>
                        </div>
                        
                    </div>

                    <div className=''>
                        <label>Name on Card</label>
                        <input type='text' placeholder='Enter Name' className='form-control'/>
                    </div>
                    
                    <div className='my-5'>
                        <Link className='mx-auto flex btn border-0 rounded-0 bg-[#4CBB17] text-[white] w-7/12 p-3' type='submit' to='/payment_successful'>
                            <IoBagCheckOutline className='me-2 my-auto text-lg'/>
                            Make Payment
                        </Link>
                    </div>

                </form>
            </div>
        </div>
    )
}