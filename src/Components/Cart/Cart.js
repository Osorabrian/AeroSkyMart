import { React } from "react";
import {BiEditAlt} from 'react-icons/bi'
import {AiOutlineDelete} from 'react-icons/ai'

export default function Cart(){

    return(
        <>
            <h1>CART</h1>
            <table>
                <tr>
                    <th scope="col" className="px-6 py-3"></th>
                    <th scope="col" className="px-6 py-3">Product</th>
                    <th scope="col" className="px-6 py-3">Quantity</th>
                    <th scope="col" className="px-6 py-3">Total</th>
                    <th></th>
                    <th></th>
                </tr>
                <tr className="border-b dark:border-gray-900">
                    <td className="px-6 py-3"><input type="checkbox"/></td>
                    <td className="px-6 py-3">Microsoft Flight Simulator</td>
                    <td className="px-6 py-3">1</td>
                    <td className="px-6 py-3">100</td>
                    <td className="px-6 py-3"><BiEditAlt/></td>
                    <td className="px-6 py-3"><AiOutlineDelete /></td>
                </tr>
                <tr className="border-b dark:border-gray-900">
                    <td className="px-6 py-3"><input type="checkbox"/></td>
                    <td className="px-6 py-3">Microsoft Flight Simulator</td>
                    <td className="px-6 py-3">1</td>
                    <td className="px-6 py-3">100</td>
                    <td className="px-6 py-3"><BiEditAlt/></td>
                    <td className="px-6 py-3"><AiOutlineDelete /></td>
                </tr>
                <tr className="border-b dark:border-black">
                    <td className="px-6 py-3"><input type="checkbox"/></td>
                    <td className="px-6 py-3">Microsoft Flight Simulator</td>
                    <td className="px-6 py-3">1</td>
                    <td className="px-6 py-3">100</td>
                    <td className="px-6 py-3"><BiEditAlt/></td>
                    <td className="px-6 py-3"><AiOutlineDelete /></td>
                </tr>
                <tr>
                    <td>Total:</td>
                    <td>300</td>
                </tr>
            </table>

            <div className="">
                <button className="btn">
                    Check Out
                </button>

            </div>
        </>
    )
}