import React from "react";
import {BsCheck2} from 'react-icons/bs'
import {HiOutlineX} from 'react-icons/hi'
import {GiCargoShip} from 'react-icons/gi'
import './productcard.css'
import gulf from '../images/gulfstream.jpg'

export default function ProjectCard(){

    return(
        <div className="card mb-4 px-0 rounded-0" id='product-card'>
            <img src={gulf} alt='lt' className="card-img-top px-0 flex-0"/>
            <div className="card-body text-left">
                <p className='card-text mb-2 font-semibold'>Wall Art</p>
                <div className="row mb-2">
                    <BsCheck2 className="fill-[#4caf50] col-2 mt-1"/><p className="col-10 -ml-5 card-text">5 in Stock</p>
                    {/* <HiOutlineX className="text-[rgb(255,0,0)] col-2 mt-1"/><p className="col-10 -ml-5 card-text">Sold Out</p>
                    <GiCargoShip className="text-[#448aff] col-2 mt-1"/><p className="col-10 -ml-5 card-text">Shipping in 2 - 3 days.</p> */}
                </div>
                <h1 className='card-text font-semibold text-[#e65100]'>Kshs. 20,000</h1>
            </div>
        </div>
    )
}