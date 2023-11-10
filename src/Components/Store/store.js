import React, {useEffect, useState} from "react";
import ProductCard from './ProductCard'
import {BiSort} from 'react-icons/bi'
import {FcFilledFilter} from 'react-icons/fc'
import './store.css'
import ProductTile from "./ProductTile";

export default function Store(){

    const [data, setData] = useState([])
    const [search, setSearch] = useState('')
    const [filter, setFilter] = useState(false)
    const [loading, setLoading] = useState(true)
    let [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/albums')
        .then(res => res.json())
        .then(data => {
            setData(data)
            setLoading(false)    
        })
    },[])

    function handleFilter(){
        if(filter){
            setFilter(false)
        }else{
            setFilter(true)
        }
    }

    function goToPrev(){
        const prevPage = Math.max(currentPage - 1, 1)
        setCurrentPage(prevPage)
    }

    function goToNext(){
        const nextPage = Math.min(currentPage + 1, pages)
        setCurrentPage(nextPage)
    }

    const filteredData = data.filter((item) => {
        return item.title.toLowerCase().includes(search.toLowerCase())
    })

    const postsPerPage = 20
    const totalData = filteredData.length 
    const pages = Math.ceil(totalData/postsPerPage)

    const start = postsPerPage * (( currentPage > pages ? currentPage = 1 : currentPage) - 1)
    const end = postsPerPage * currentPage
    
    const canPrev = currentPage > 1
    const canNext = currentPage < pages 
    
    const dataList = filteredData.map((data) => {
        return <ProductTile key={data.id} name={data.title} id={data.id}/>
    }) 
    
    const posts = dataList.slice(start, end)

    return(
        <div className="font-lato" id='store'>
             
                    <div className="flex m-3 justify-center mx-auto" id='search-section'>

                        <input
                         placeholder="Search..."
                         type="search" 
                         className="form-control rounded-0 h-10 my-auto" 
                         id='search' 
                         onChange={e => setSearch(e.target.value)}
                        />

                        <select name='category' id='category-select' className="form-select">
                                <option value=''>category</option>
                                <option>Books</option>
                                <option>Accessories</option>
                                <option>Clothes</option>
                                <option>Souvenior</option>
                            </select>

                    </div>

            {filter &&    (
                <div className="flex flex-wrap justify-center">

                    <input type='number' placeholder="Min Price" min='0.00' classname='form-control m-1' id={'min-price'}/>
                                
                    <input type='number' placeholder="Max Price" min='1' classname='form-control m-1' id={'max-price'}/>

                    <button className="btn m-1" onClick={handleFilter} id='close-filter'>
                        <span id='close-text'>Close Filter</span>
                    </button>

                </div>
            )}

            {!loading ? (
                <>
                    {posts.length > 0 && (
                        <div className="flex mb-2 ms-2">

                            <p style={{textAlign: 'left'}} className="font-semibold m-2">
                                {start + 1} to {end > totalData ? totalData: end} of {totalData} results 
                            </p>

                            <div className="flex ms-auto m-2">
                                <button className="flex me-3" onClick={handleFilter}>
                                    <FcFilledFilter className="my-auto"/>   
                                    Filter
                                </button>

                                <button className='flex'>
                                    <BiSort className="my-auto fill-[#e96f0c]"/>
                                    Sort
                                </button>
                            </div>

                        </div>
                    )}
                
                    <div className="row mx-auto" id='cards'>

                        {posts.length > 0 ?
                            <>
                                {posts}
                            </>                     
                        :
                            <p>No Search Results.</p>
                        }
                        
                    </div>

                    {posts.length > 0 && (
                            <div className="row mx-auto mt-1 mb-5" id='pagination'>
                                <button className = 'btn btn-dark col-4' disabled={!canPrev} onClick={goToPrev}>
                                    {`<< Prev.`}
                                </button>
                                <p className="col-4">
                                    { currentPage > pages ? currentPage = 1 : currentPage} of {pages}
                                </p>
                                <button className = 'btn btn-dark col-4' disabled={!canNext} onClick={goToNext}>
                                    {`Next >>`}
                                </button>
                            </div>
                    )}
                </>
            ) : (
            <p className=" mt-5 text-5xl font-semibold"> Loading ...</p>
            )}

        </div>
    )
}