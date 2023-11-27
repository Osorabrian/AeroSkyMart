import React from "react";
import { RxAvatar } from "react-icons/rx";
import {AiFillStar,AiOutlineStar} from 'react-icons/ai'
import {BsStarHalf} from 'react-icons/bs'

export default function Review(){
    return(
                <div>
                    <div className='flex ms-3'>
                        <RxAvatar className="text-6xl my-auto"/>
                        <div className="flex-wrap ms-2 text-left my-auto">
                            <p className="text-lg font-semibold">Brian Osora</p>
                            <div className="flex my-auto">
                                    <AiFillStar className="checked my-auto" />
                                    <AiFillStar className="checked my-auto"/>
                                    <BsStarHalf className="checked my-auto"/>
                                    <AiOutlineStar className="unchecked my-auto"/>
                                    <AiOutlineStar className="unchecked my-auto"/>
                            </div>   
                        </div>
                        <p className="ms-auto tile-text my-auto me-3">11/23/2023</p>
                    </div>

                    <p className="flex-wrap text-left ms-3 mt-1">
                        sdfvbdvsdfnv mdfsnvdfjvd fjvhbvjhhdsv iueheiuhevbe uvierrbeb hbevebjhve vehrbefehbfer hbejhebf hejrbfehjferf hjebrfer
                    </p>

                    <hr className="m-3 divide-amber-800"></hr>
                </div>
    )
}