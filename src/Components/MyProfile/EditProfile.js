import React from 'react'

export default function EditProfile(){
    return(
        <div>
            <form>
                <label>First Name</label>
                <input type='text' placeholder='first name'/>

                <label>Last Name</label>
                <input type='text' placeholder='last name'/>

                <label>Email</label>
                <input type='email' placeholder='example@yahoo.com'/>

                <label>Phone Number</label>
                <input type='number' placeholder='0746451952'/>

                <label>Adress</label>
                <input type='text' />
            </form>
        </div>
    )
}