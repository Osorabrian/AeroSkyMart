import React, {useState, useEffect} from "react";
import ProductCard from '../Store/ProductCard'

export default function PreviouslyViewed(){

    const [cards, setCards] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/albums')
        .then(res => res.json())
        .then(data => setCards(data))
    },[])
    return(
        <div>
                <h1 className="text-4xl font-semibold mt-1">Previously Viewed</h1>
                <div className="flex flex-row overflow-x-scroll space-x-5 w-screen">
                    {
                        cards.slice(0,12).map((card) => {
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