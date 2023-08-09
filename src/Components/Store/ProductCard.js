import React from "react";
import './productcard.css'
import gulf from '../images/gulfstream.jpg'

export default function ProjectCard(){

    return(
        <div className="card ms-4 px-0 rounded-0" id='product-card'>
            <img src={gulf} alt='lt' className="card-img-top px-0 flex-0"/>
            <div className="card-body text-left">
                <p className='card-title'>Wall Art</p>
                <h1 className='card-text font-semibold text-[#191553]'>Kshs. 20,000</h1>
            </div>
        </div>
    )
}