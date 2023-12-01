import { React } from "react";
import CartItem from "./CartItem";
import './cart.css'

export default function Cart(){

    return(
        <>
            <h1 className="text-xl my-3 font-bold">(20) Items</h1>
                        
            <div className="mx-auto" id='price-div'>

                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />

                <div className="justify-between flex m-4 ">
                    <p className="text-3xl font-bold">Total: </p>
                    <p className="font-semibold text-[#ff9800] text-2xl">Kshs. 112,000</p>
                </div>
                
                <div className="mx-auto m-5">
                    <button className="btn" id="checkout-btn">
                        Check Out
                        <i className="fa-solid fa-bag-shopping ms-4 my-auto" style={{color: "#ffffff"}}></i>
                    </button>
                </div>
            
            </div>
        </>
    )
}