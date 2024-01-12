import React from 'react'
import { PiCheckCircleLight } from "react-icons/pi";
import { Link } from 'react-router-dom';

export default function Succesful(){
    return(
        <div className='p-3'>

            <p className='justify-center my-4 flex flex-wrap'>Your Payment of <span className='text-[#ff9800] ms-1 me-1'>Kshs. 1,200,000</span> is successful.</p>

            <PiCheckCircleLight className='text-8xl fill-[#4CBB17] mx-auto'/>

            <p className='justify-center my-4 flex flex-wrap'>You can proceed to My Orders page to track your order(s).</p>

            <Link to={''} className='btn border-1 border-[#ff9800] bg-[#ff9800] rounded-none text-[white] my-4'>
                Proceed to My Orders
            </Link>

        </div>
    )
}