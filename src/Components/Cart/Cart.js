import { React, useState } from "react";
import {Link, NavLink} from 'react-router-dom'
import CartItem from "./CartItem";
import { FaOpencart } from "react-icons/fa";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import './cart.css'

export default function Cart(){

    const [addressValue, setAddressValue] = useState('')
    const [cartItems, setCartItems] = useState([])
    
    return(
        <div> 
            {cartItems.length === 0 && (
                <div className="my-5">
                    <MdOutlineRemoveShoppingCart className="mx-auto my-5 text-7xl text-[#ff9800]"/>
                    <p className="my-3">Your Cart is empty.</p>
                    <p className="my-3 flex-wrap">Please visit 
                        <Link to={'/store'} className={'text-[#ff9800]'}> our store </Link>
                    to view products.</p>

                    <Link className='mx-auto justify-center flex border-1 bg-[#ff9800] rounded-none mt-5 mb-5 text-[white] p-3 w-6/12' to={'/store'}>
                        <FaOpencart className='me-2'/>
                        Proceed to Store
                    </Link>
                </div>
            )}
            {cartItems.length > 0 && (
                <div>
                    
                    <h1 className="text-2xl mt-4 mb-3 font-bold">(20)Cart Items</h1>
                                
                    <div className="flex flex-wrap" id='price-div'>

                        <div className="" id='cart-items-div'>
                            <CartItem />
                            <CartItem />
                            <CartItem />
                            <CartItem />
                        </div>

                        <div className="flex-wrap" id='checkout-div'>
                            <div id="pricing-shopping">
                                <div className="text-left m-3">
                                    <h1 className="font-bold text-4xl">Shipping Info.</h1>

                                    <h2 className="font-semibold mt-2">Shipping Address</h2>

                                    <form name="shipping-address" className="flex-wrap">

                                        <div className="m-2">
                                            <input type="radio" name='shipping-address' value={'enter-address'} onClick={(e) => setAddressValue(e.target.value)}/>
                                            <label className="ms-1">Enter shipping address.</label>

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
                                        </div>
                                        
                                        <div className="m-2">
                                            <input type="radio" name="shipping-address" value={'saved-address'} onClick={(e) => setAddressValue(e.target.value)}/>
                                            <label className="ms-1">Ship to saved address.</label>   

                                            {
                                                addressValue === 'saved-address' && (
                                                    <div>
                                                        <form>
                                                            <label>Select Address</label>
                                                            <select name="address" >
                                                                <option value={'home'}>Home</option>
                                                                <option value={'work'}>Work</option>
                                                                <option value={'parents'}>Parents</option>
                                                            </select>
                                                        </form>
                                                    </div>
                                                )
                                            }
                                        </div>

                                        <div className="m-2">
                                            <input type="radio" name="shipping-address" value={'current-address'}onClick={(e) => setAddressValue(e.target.value)}/>
                                            <label className="ms-1">Ship to current location.</label>

                                            {
                                                addressValue === 'current-address' && (
                                                    <div>
                                                        <form>
                                                            <label>Current location</label>
                                                            <input type="text" placeholder="Current Location"/>
                                                        </form>
                                                    </div>
                                                )
                                            }
                                        </div>

                                    </form>
                                </div>
                                
                                <div className="text-left m-3">
                                    <p className="text-4xl font-bold">Pricing</p>

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

                            </div>
                                <div className="my-3" id='checkout button'>
                                    <Link className="justify-center btn w-10/12" id="checkout-btn" to={'/checkout'}>
                                        Check Out
                                        <i className="fa-solid fa-bag-shopping ms-4 my-auto" style={{color: "#ffffff"}}></i>
                                    </Link>
                                </div>
                        </div>   
                    </div>
                </div>
            )}
        </div>
    )
}