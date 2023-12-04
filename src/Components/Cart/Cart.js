import { React } from "react";
import {Link} from 'react-router-dom'
import CartItem from "./CartItem";
import './cart.css'

export default function Cart(){

    return(
        <>
            <h1 className="text-xl mt-4 mb-3 font-bold">(20) Items</h1>
                        
            <div className="mx-auto" id='price-div'>

                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />

                <div className="justify-between flex m-4 ">
                    <p className="text-3xl font-bold">Total: </p>
                    <p className="font-semibold text-[#ff9800] text-2xl">Kshs. 112,000</p>
                </div>
                
                <div className="mx-auto mb-5">
                    <Link className="btn" id="checkout-btn" to={'/checkout'}>
                        Check Out
                        <i className="fa-solid fa-bag-shopping ms-4 my-auto" style={{color: "#ffffff"}}></i>
                    </Link>
                </div>
            
            </div>
        </>
    )
}