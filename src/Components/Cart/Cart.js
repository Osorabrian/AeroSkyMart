import { React, useState } from "react";
import {Link} from 'react-router-dom'
import CartItem from "./CartItem";
import './cart.css'

export default function Cart(){

    const [addressValue, setAddressValue] = useState('')
    console.log(addressValue)
    
    return(
        <div>
            <h1 className="text-xl mt-4 mb-3 font-bold">(20)Cart Items</h1>
                        
            <div className="flex flex-wrap" id='price-div'>

                <div>
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                </div>

                <div className="flex-wrap">

                    <div>
                        <h1 className="font-bold">Delivery Information</h1>

                        <h2>Shipping Address</h2>

                        <form name="shipping-address">

                            <input type="radio" name='shipping-address' value={'enter-address'} onClick={(e) => setAddressValue(e.target.value)}/>
                            <label>Enter shipping address.</label>

                            {addressValue === 'enter-address' && (
                                <div>
                                    <label>Country</label>
                                    <input type="text" placeholder="Country"/>
                                    <label>City</label>
                                    <input type="text" placeholder="City"/>
                                    <label>Postal Address</label>
                                    <input type="text" placeholder="Postal Adress"/>
                                    <label>House Number</label>
                                    <input type="text" placeholder="House Number"/>
                                    <label>Comments</label>
                                    <textarea placeholder="Additional Comments" rows={2}/>
                                </div>
                            )}

                            <input type="radio" name="shipping-address" value={'saved-address'} onClick={(e) => setAddressValue(e.target.value)}/>
                            <label>Ship to saved address.</label>

                            <input type="radio" name="shipping-address" value={'current-address'}onClick={(e) => setAddressValue(e.target.value)}/>
                            <label>Ship to saved Current location.</label>

                        </form>
                    </div>
                    
                    <div className="text-left m-3">
                        <p className="text-3xl font-bold">Price Information</p>

                        <div className="justify-between flex my-1">
                        <p>SubTotal:</p>
                        <p>102,000</p>
                        </div>

                        <div className="justify-between flex my-1">
                        <p>shipping:</p>
                        <p>10,000</p>
                        </div>

                        <div className="justify-between flex my-1">
                        <p>Discount:</p>
                        <p>0</p>
                        </div>

                        <div className="justify-between flex my-1">
                        <p className="font-semibold text-2xl">Total:</p>
                        <p className="font-semibold text-[#ff9800] text-2xl">Kshs. 112,000</p>
                        </div>

                    </div>
                                
                    <div className="mx-auto mb-5">
                        <Link className="btn" id="checkout-btn" to={'/checkout'}>
                            Check Out
                            <i className="fa-solid fa-bag-shopping ms-4 my-auto" style={{color: "#ffffff"}}></i>
                        </Link>
                    </div>

                    </div>
                </div>
        </div>
    )
}