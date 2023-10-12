import { React } from "react";
import {AiOutlineDelete} from 'react-icons/ai'
import img from '../images/msfs/msfs_cover.jpg'
import './cart.css'

export default function Cart(){

    return(
        <>
            <h1>CART</h1>
            <table className="text-left">
                <tr>
                    <th scope="col" className="px-6 py-3">Product</th>
                    <th scope="col" className="px-6 py-3">Price</th>
                    <th scope="col" className="px-6 py-3">Quantity</th>
                    <th scope="col" className="px-6 py-3">Total</th>
                    <th></th>
                    <th></th>
                </tr>
                <tr className="border-b dark:border-gray-900">
                    <td className="px-6 py-3 row">
                        <img src={img} alt={'cover'} id="thumbnail" className="col-6"/>
                        <span className="col-6 my-auto">Microsoft Flight Simulator</span>
                    </td>
                    <td className="px-6 py-3">100</td>
                    <td className="px-6 py-3">
                        <input type="number" min={1}  className="border-1 border-black w-11 text-center" id="quantity-input"/>
                    </td>
                    <td className="px-6 py-3">100</td>
                    <td className="px-6 py-3"><AiOutlineDelete className="text-[rgb(255,0,0)]"/></td>
                </tr>
                <tr className="border-b dark:border-gray-900">
                    <td className="px-6 py-3">Microsoft Flight Simulator</td>
                    <td className="px-6 py-3">100</td>
                    <td className="px-6 py-3">1</td>
                    <td className="px-6 py-3">100</td>
                    <td className="px-6 py-3"><AiOutlineDelete className="text-[rgb(255,0,0)]"/></td>
                </tr>
                <tr className="border-b dark:border-black">
                    <td className="px-6 py-3">Microsoft Flight Simulator</td>
                    <td className="px-6 py-3">100</td>
                    <td className="px-6 py-3">1</td>
                    <td className="px-6 py-3">100</td>
                    <td className="px-6 py-3"><AiOutlineDelete className="text-[rgb(255,0,0)]"/></td>
                </tr>
               
            </table>

            <div className="mx-auto" id='price-div'>

                <div className="mx-auto mb-3">
                    <p><span className="text-l text-left me-3">Sub Total:</span><span className="text-gray">300</span></p>
                    <p><span className="text-l me-4">Shipping:</span>30</p>
                    <p><span className="text-2xl me-4">Total:</span>330</p>
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