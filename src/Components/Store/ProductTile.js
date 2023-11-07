import React from "react";
import {GiFairyWand} from 'react-icons/gi'
import thumbnail from '../images/gulfstream.jpg'

export default function ProductTile(){
    return(
        <div className="flex">
            <img src={thumbnail} alt={'gulfstream'} />
            <div>
                <h2>vgngcncvbbvbncbnbvnb</h2>
                <p>Kshs. 25,000</p>
            </div>
            <GiFairyWand/>
        </div>
    )
}