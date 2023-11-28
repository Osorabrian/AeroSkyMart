import React, {useState, useEffect} from "react";
import ProductCard from '../Store/ProductCard'

export default function SimilarProducts(){

    const [cardList, setCardList] = useState([])

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/albums')
        .then(res => res.json())
        .then(data => setCardList(data))
    },[])

    return(
            <div>
                <h1 className="text-4xl text-left font-semibold mt-4">Similar Products</h1>
                <div className="flex flex-row space-x-5 ms-5 w-11/12 my-4 overflow-x-scroll">
                    {
                        cardList.slice(0,6).map((card) => {
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