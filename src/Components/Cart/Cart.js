import { React } from "react";
import {AiOutlineDelete} from 'react-icons/ai'
import {IoBagCheckOutline} from 'react-icons/io'
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
                    <td className="px-6 py-3">Microsoft Flight Simulator</td>
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

            <div>
                <button className="btn" id="checkout-btn">
                    Check Out
                    <i className="fa-solid fa-bag-shopping ms-4 my-auto" style={{color: "#ffffff"}}></i>
                </button>

            </div>
        </>
    )
}