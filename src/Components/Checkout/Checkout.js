import React from 'react'
import { BsPaypal } from "react-icons/bs";
import { PiCreditCardThin } from "react-icons/pi";
import { FaApplePay } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import mpesa from '../images/mpesa logo.png'

export default function Checkout(){

    return(
        <div>
            <p>Kshs. 1,2000,000</p>
            <h1 className='my-4'>Payment Type</h1>
            <div>

                <div className='flex'>
                    <input type='radio' name='payment' />
                    <label className='flex'>
                        <PiCreditCardThin className='my-auto'/>
                        Debit/Credit Card
                    </label>
                </div>

                <div className='flex'>
                    <input type='radio' name='payment'/>
                    <label className='flex'>
                        <BsPaypal className='my-auto fill-[#253b80]'/>
                        <div>
                            <i className='text-[#253b80] font-bold'>pay</i>
                            <i className='text-[#179bd7] font-bold'>Pal</i>
                        </div>
                    </label>
                </div>

                <div className='flex'>
                    <input type='radio' name='payment'/>
                    <label>
                        <img src={mpesa} alt='mpesa' style={{height: '60px'}} />
                    </label>
                </div>

                <div className='flex'>
                    <input type='radio' name='payment'/>
                    <label>
                        <FaApplePay className='text-5xl'/>
                    </label>
                </div>

                <div className='flex'>
                    <input type='radio' name='payment'/>
                    <label className='flex'>
                        <FcGoogle className='my-auto'/>
                        Pay
                    </label>
                </div>

            </div>
        </div>
    )
}