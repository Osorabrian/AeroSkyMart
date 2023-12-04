import React, {useState} from "react";
import { FiMinus } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
import img from '../images/msfs/msfs_cover.jpg'
import './cart.css'

export default function CartItem(){

    const [quantity, setQuantity] = useState(2)

    return(
            <div className="mx-3">
                <div className="flex text-left">
                    <img src={img} alt="" id="thumbnail"/>

                    <div className="flex-wrap my-auto mx-2">
                        <p className="flex flex-wrap font-semibold">Microsoft Flight Simulator 2020</p>

                        <div className="flex my-1">
                            <p className="me-2">Quantity:</p>
                            <FiMinus className="my-auto m-1" onClick={() => setQuantity(quantity - 1)}/>

                            <input placeholder={quantity} 
                            value={quantity} 
                            className="border-1 border-[black] my-auto text-center" 
                            id='expandable-input'
                            onChange={(e) => setQuantity(e.target.value)}/>

                            <GoPlus className="my-auto m-1" onClick={() => setQuantity(quantity + 1)}/>
                        </div>

                        <p className="text-lg text-[#ff9800] font-semibold">Kshs.280,000</p>
                    </div>
                </div>
                <hr className="my-2"></hr>
            </div>
    )
}