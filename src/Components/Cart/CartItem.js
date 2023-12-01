import React from "react";
import { FiMinus } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
import img from '../images/msfs/msfs_cover.jpg'

export default function CartItem(){
    return(
            <div className="mx-3">
                <div className="flex">
                    <img src={img} alt="" id="thumbnail"/>

                    <div className="flex-wrap my-auto">
                        <p className="mb-2">Microsoft Flight Simulator 2020</p>
                        <div className='justify-evenly flex ms-3'>

                                <div className="flex">
                                    <GoPlus className="my-auto m-1"/>
                                    <input placeholder="1" className="border-1 border-[black] my-auto" id='expandable-input'/>
                                    <FiMinus className="my-auto m-1"/>
                                </div>

                            <p className="text-xl text-[#ff9800] mx-3 font-semibold">Kshs.28,0000</p>
                        </div>
                    </div>
                </div>
                <hr></hr>
            </div>
    )
}