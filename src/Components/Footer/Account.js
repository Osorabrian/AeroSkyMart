import React, {useState} from "react";

export default function Account(){

    const [user, setUser] = useState(false)

    return(
        <div className="flex-wrap m-3">
            <h1 className="text-lg font-semibold">My Account</h1>
            { user ? (
                    <div className="text-[#B2BEB5]">
                        <p className="m-1">My Cart</p>
                        <p className="m-1">My Orders</p>
                        <p className="m-1">My Wishlist</p>
                        <button className="m-2 btn bg-light text-dark rounded-none">
                            Log Out
                        </button>
                    </div>
            ):(
                <div className="mx-auto text-[#B2BEB5]">
                    <button className="m-3 btn bg-light text-dark rounded-none">
                        Log In
                    </button>
                    <p>Don't have an Account ?</p>
                    <button className="m-3 btn bg-light text-dark rounded-none">
                        Create Account
                    </button>
                </div>
            )}
      
    </div>
    )
}