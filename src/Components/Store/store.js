import React, {useEffect, useState} from "react";
import ProductCard from './ProductCard'
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
             
            { !filter && (
                    <div className="flex mx-auto m-3" id='search-section'>

                        <input
                         placeholder="Search..."
                         type="search" 
                         className="form-control rounded-0 h-10 my-auto" 
                         id='search' 
                         onChange={e => setSearch(e.target.value)}
                        />

                        <button className="flex my-auto m-3" onClick={handleFilter}>
                            <i className="fa-solid fa-filter me-1 my-auto" style={{color: "#e96f0c"}}></i>   
                            Filter
                        </button>

                    </div>
            )}

            {!loading ? (
                <>
                    {posts.length > 0 && (
                        <div className="mb-3 ms-3">
                            <p style={{textAlign: 'left'}} className="font-semibold">
                                Showing {start + 1} to {end > totalData ? totalData: end} of {totalData} results</p>
                        </div>
                    )}
                

                    {filter &&    (
                    <div id='filter'>
                    <div className="row mx-auto mt-3 mb-3" id='filter-div'>
                            
                            <div className="row col-5">
                                <div className="col-6 mb-3" id='search-bar-filter'>
                                    <input placeholder="Keyword" type="search" className="form-control w-50 rounded-0" id='search' onChange={e => {setSearch(e.target.value)}}/>
                                </div>

                                <div className="col-6">
                                    <select name='category' id='category-select' className="form-select search">
                                        <option value=''>Select category</option>
                                        <option>Books</option>
                                        <option>Accessories</option>
                                        <option>Clothes</option>
                                        <option>Souvenior</option>
                                    </select>
                                </div>
                            </div>

                            <div className="col-4 mb-2" id='price-div'>
                                <input type='number' placeholder="Min Price" min='0.00' classname='form-control' id={'min-price'}/>
                                <input type='number' placeholder="Max Price" classname='form-control' id={'max-price'}/>
                            </div>

                            <div className="col-2">
                                <button className="btn" onClick={handleFilter} id='close-filter'>
                                    <span id='close-text'>Close Filter</span>
                                </button>
                            </div>

                        </div>
                        </div>
                        )}

                    <ProductTile/>

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
                            <div className="row mx-auto" id='pagination'>
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