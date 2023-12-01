import { React } from "react";
import CartItem from "./CartItem";
import './cart.css'

export default function Cart(){

    return(
        <>
            <h1>CART</h1>
                        
            <div className="mx-auto" id='price-div'>

                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />

                <div className="mx-auto mb-3">
                    <p><span className="text-l text-left me-3">Sub Total:</span><span className="text-gray">$300</span></p>
                    <p><span className="text-l me-4">Shipping:</span>$30</p>
                    <p><span className="text-2xl me-4">Total:</span>$330</p>
                </div>
                
                <div className="mx-auto">
                    <button className="btn" id="checkout-btn">
                        Check Out
                        <i className="fa-solid fa-bag-shopping ms-4 my-auto" style={{color: "#ffffff"}}></i>
                    </button>
                </div>
            
            </div>
        </>
    )
}