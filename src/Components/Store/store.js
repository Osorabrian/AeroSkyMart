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
        return <ProductCard key={data.id} name={data.title} id={data.id}/>
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
                         autoFocus
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
                   
                    <div className="flex" id='cards'>

                        <div className="flex-wrap w-8/12 text-left ms-3 mt-5" id="filter-section">
                            {/* <div className="vr h-100"></div> */}
                            <h1 className="font-bold mb-2">Availability</h1>

                            <div>
                                <input type="checkbox" className="me-2"/>
                                <label>Available</label>
                            </div>

                            <div>
                                <input type="checkbox" className="me-2"/>
                                <label>Out of Stock</label>
                            </div>

                            <div>
                                <input type="checkbox" className="me-2"/>
                                <label>Upcoming</label>
                            </div>
                        </div>

                        <div>
                            {posts.length > 0 ?
                                <div>
                                    <div className="flex mb-2 ms-2">

                                        <p style={{textAlign: 'left'}} className="font-semibold m-2 my-auto" >
                                            {start + 1} to {end > totalData ? totalData: end} of {totalData} results 
                                        </p>

                                        <div className="flex ms-auto mx-3">
                                            <button className="flex me-3" onClick={handleFilter} id='filter-button'>
                                                <FcFilledFilter className="mt-1"/>   
                                                Filter
                                            </button>

                                            <div className="dropdown">
                                                <button className='flex' type="button" data-bs-toggle='dropdown'>
                                                    <BiSort className="my-auto fill-[#e96f0c]"/>
                                                    Sort
                                                </button>
                                                <ul className="dropdown-menu">
                                                    <li className="m-2">Best Rated</li>
                                                    <li className="m-2">Best Selling</li>
                                                    <li className="m-2">Price (High to Low)</li>
                                                    <li className="m-2">Price (Low to High)</li>
                                                    <li className="m-2">Newest to Oldest</li>
                                                    <li className="m-2">Oldest to Newest</li>
                                                </ul>
                                            </div>
                                        </div>
                                </div>
                                <div className="flex flex-wrap">
                                    {posts}
                                </div>
                                </div>                     
                            :
                                <p className='justify-center py-5 my-5 text-2xl flex flex-wrap'>No Search Results.</p>
                            }
                        </div>
                        
                    </div>

                    {posts.length > 0 && (
                            <div className="row mx-auto mt-1 mb-5" id='pagination'>
                                <button className = 'btn btn-dark col-4' disabled={!canPrev} onClick={goToPrev}>
                                    {`Prev`}
                                </button>
                                <p className="col-4">
                                    { currentPage > pages ? currentPage = 1 : currentPage} of {pages}
                                </p>
                                <button className = 'btn btn-dark col-4' disabled={!canNext} onClick={goToNext}>
                                    {`Next`}
                                </button>
                            </div>
                    )}
                </>
            ) : (
            <p className=" my-5 text-5xl font-semibold"> Loading ...</p>
            )}

        </div>
    )
}