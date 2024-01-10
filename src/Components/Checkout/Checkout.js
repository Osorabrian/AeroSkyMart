import React from 'react'
import { BsPaypal } from "react-icons/bs";
import { PiCreditCardThin } from "react-icons/pi";
import { FaApple } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import mpesa from '../images/mpesa logo.png'
import './checkout.css'

export default function Checkout(){

    return(
        <div>

            <div className='text-left mt-4' id='amount-info'>
                <p className='text-sm font-bold text-[grey]'>TOTAL AMOUNT</p>
                <p className='text-xl text-[#ff9800]'>Kshs. 1,2000,000</p>
                <h1 className='my-3 text-3xl ms-2'>Payment Types</h1>
            </div>

            <div id='payment-types' className='mb-5'>

                <div className='flex border-1 border-[black] my-3 p-2'>
                    <input type='radio' name='payment'/>
                    <label className='flex ms-2'>
                        <PiCreditCardThin className='my-auto me-1'/>
                        Debit/Credit Card
                    </label>
                </div>

                <div className='flex border-1 border-[#253b80] my-3 p-2'>
                    <input type='radio' name='payment'/>
                    <label className='flex ms-2'>
                        <BsPaypal className='my-auto fill-[#253b80] me-1'/>
                        <div>
                            <i className='text-[#253b80] font-bold'>pay</i>
                            <i className='text-[#179bd7] font-bold'>Pal</i>
                        </div>
                    </label>
                </div>

                <div className='flex border-1 border-[#228B22] my-3 p-2'>
                    <input type='radio' name='payment'/>
                    <label className='ms-2'>
                        <img src={mpesa} alt='mpesa' style={{height: '35px'}} />
                    </label>
                </div>

                <div className='flex border-1 border-[black] my-3 p-2'>
                    <input type='radio' name='payment'/>
                    <label className='flex ms-2'>
                        <FaApple className='text-lg me-1'/>
                        Apple Pay
                    </label>
                </div>

                <div className='flex border-1 border-[#4285F4] my-3 p-2'>
                    <input type='radio' name='payment'/>
                    <label className='flex ms-2'>
                        <FcGoogle className='my-auto text-lg me-1'/>
                        Google Pay
                    </label>
                </div>

            </div>
        </div>
    )
}