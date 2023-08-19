import React, {useEffect, useState} from "react";
import ProductCard from './ProductCard'
import './store.css'

export default function Store(){

    const [data, setData] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/albums')
        .then(res => res.json())
        .then(data => setData(data))
    },[])

    const filteredData = data.filter((item) => {
        return item.title.toLowerCase().includes(search.toLowerCase())
    })

    console.log(filteredData)

    const dataList = filteredData.map((data) => {
        return <ProductCard key={data.id} name={data.title}/>
    })

    return(
        <div className="font-lato">

            <div className=" mt-3">
                <h1 className="text-4xl">Our Products</h1>
            </div>
             
            <div className="row mt-3 mb-3" id='search-row'>
                <div className="row ms-auto" id='search-bar'>
                    <input placeholder="Search..." type="search" className="form-control w-50 rounded-0 col-9 ms-11" id='search' onChange={e => setSearch(e.target.value)}/>
                    <p className="text-right col-3 -mt-1"><i className="fa-solid fa-filter mt-3" style={{color: "#e96f0c"}}></i>   Filter</p>
                </div>
            </div>

            <div className="row mx-auto" id='cards'>
                {dataList}
            </div>

        </div>
    )
}