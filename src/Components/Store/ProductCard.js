import React from "react";
import {BsCheck2} from 'react-icons/bs'
import {HiOutlineX} from 'react-icons/hi'
import {GiCargoShip} from 'react-icons/gi'
import './productcard.css'
import {Link} from 'react-router-dom'
import gulf from '../images/gulfstream.jpg'

export default function ProjectCard({name,id}){

    return(
        <Link className="card mb-4 px-0" id='product-card' to ={`${id}`} >
            <img src={gulf} alt='lt' className="card-img-top px-0 flex-0"/>
            <div className="card-body text-left -ms-3 -mt-2">
                <p className='card-text mb-1 font-semibold' id='card-title'>{name}</p>
                <div className="row mb-1">
                    {/* <BsCheck2 className="fill-[#4caf50] col-3 mt-1 -ml-3 icon"/><p className="col-9 -ml-6 card-text stock">5 in Stock</p> */}
                    <HiOutlineX className="text-[rgb(255,0,0)] col-3 mt-1 -ml-3 icon"/> <p className="col-9 -ml-6 card-text">Sold Out</p>
                    {/* <GiCargoShip className="text-[#448aff] col-3 mt-1 -ml-3 icon"/><p className="col-9 -ml-6 card-text">Shipping</p> */}
                </div>
                <h1 className='card-text font-semibold text-[#e65100]'>Kshs. 20,000</h1>
            </div>
        </Link>
    )
}