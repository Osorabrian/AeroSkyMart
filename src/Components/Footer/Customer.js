import React from "react";
import { Link } from "react-router-dom";

export default function Customer(){
    return(
        <div className="flex-wrap m-3">
            <h1 className="text-lg font-semibold">Customer Support</h1>

            <ul className="text-[#B2BEB5]">

                <li className="m-2">
                    <Link to='/'>FAQs</Link>
                </li>
                <li className="m-2">
                    <Link to='/'>Shipping & Handling</Link>
                </li>
                <li className="m-2">
                    <Link to='/'>Terms & Conditions</Link>
                </li>
                <li className="m-2">
                    <Link to='/cart' >Privacy Policy</Link>
                </li>
                <li className="m-2">
                    <Link to='/contact'>Contact Us</Link>
                </li>

            </ul>

        </div>
    )
}