import React, {useState, useEffect} from "react";
import ProductCard from '../Store/ProductCard'
import './product.css'

export default function PreviouslyViewed(){

    const [cards, setCards] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/albums')
        .then(res => res.json())
        .then(data => setCards(data))
    },[])
    return(
        <div>
                <h1 className="text-4xl text-left font-semibold">Previously Viewed</h1>
                <div className="flex flex-row overflow-x-scroll space-x-5 my-4 w-screen no-scrollbar">
                    {
                        cards.slice(0,5).map((card) => {
                            return(
                                <div>
                                    <ProductCard key={card.id} id={card.id} name={card.title}/>
                                </div>
                            )
                        })
                    }
                </div>
        </div>
    )
}