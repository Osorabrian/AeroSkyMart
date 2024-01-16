import React, {useState, useEffect} from 'react'
import ProductTile from '../Store/ProductTile'

export default function WishList(){

    const [list, setList] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/albums')
        .then(res => res.json())
        .then(data => setList(data))
    },[])

    const data = list.map((item) => {
        return (
            <ProductTile key={item.id} name={item.title} id={item.id}/>
        )
    })

    console.log(list)

    return(
        <>
            <p className='text-4xl'>{list.length} items</p>
            { data }
        </>
    )
}