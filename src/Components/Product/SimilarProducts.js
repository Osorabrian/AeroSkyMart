import React, {useState, useEffect} from "react";
import ProductCard from '../Store/ProductCard'
import './product.css'

export default function SimilarProducts(){

    const [cardList, setCardList] = useState([])

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/albums')
        .then(res => res.json())
        .then(data => setCardList(data))
    },[])

    return(
        <div className="row m-2">
                <h1 className="text-4xl text-left font-semibold mt-4">Similar Products</h1>
                <div className="flex flex-row space-x-5 w-screen mt-4 overflow-x-scroll no-scrollbar">
                    {
                        cardList.slice(0,5).map((card) => {
                            return( 
                                <div key={card.id}>
                                    <ProductCard name={card.title} id={card.id}/>
                                </div>)
                        })
                    }
                </div>
         </div>
    )
}