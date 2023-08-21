import React, {useEffect, useState} from "react";
import ProductCard from './ProductCard'
import './store.css'

export default function Store(){

    const [data, setData] = useState([])
    const [search, setSearch] = useState('')
    const [filter, setFilter] = useState(false)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/albums')
        .then(res => res.json())
        .then(data => setData(data))
    },[])

    function handleFilter(){
        if(filter){
            setFilter(false)
        }else{
            setFilter(true)
        }
    }

    console.log(filter)

    const filteredData = data.filter((item) => {
        return item.title.toLowerCase().includes(search.toLowerCase())
    })

    const dataList = filteredData.map((data) => {
        return <ProductCard key={data.id} name={data.title}/>
    })

    return(
        <div className="font-lato">

            <div className=" mt-3">
                <h1 className="text-4xl">Our Products</h1>
            </div>
             
            { !filter && (
                <div className="row mt-3 mb-3" id='search-row'>
                    <div className="row ms-auto" id='search-bar'>
                        <input placeholder="Search..." type="search" className="form-control w-50 rounded-0 col-9 ms-11" id='search' onChange={e => setSearch(e.target.value)}/>
                        <button className="text-right col-3 -mt-1" onClick={handleFilter}><i className="fa-solid fa-filter mt-3" style={{color: "#e96f0c"}}> </i>   Filter</button>
                    </div>
                </div>
            )}

            {filter &&    (
            <div className="row mx-auto mt-3 mb-3" id='filter-div'>

                    <div className="col-3 mb-3" id='search-bar-filter'>
                        <input placeholder="Keyword" type="search" className="form-control w-50 rounded-0" id='search' onChange={e => setSearch(e.target.value)}/>
                    </div>

                    <div className="col-3">
                        <select name='category' id='category-select' className="form-select search">
                            <option value=''>Select category</option>
                            <option>Books</option>
                            <option>Accessories</option>
                            <option>Clothes</option>
                            <option>Souvenior</option>
                        </select>
                    </div>

                    <div className="col-4">
                        <input type='number' placeholder="Min Price" min='0.00' classname='form-control' id={'min-price'}/>
                        <input type='number' placeholder="Max Price" classname='form-control' id={'max-price'}/>
                    </div>

                     <div className="col-2">
                        <button className="btn" onClick={handleFilter} id='close-filter'>
                            <span id='close-text'>Close Filter</span>
                        </button>
                    </div>

                </div>

               

                )}

            <div className="row mx-auto" id='cards'>
                {dataList}
            </div>

        </div>
    )
}