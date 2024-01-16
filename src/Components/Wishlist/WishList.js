import React, {useState, useEffect} from 'react'
import ProductCard from '../Store/ProductCard'
import './wishlist.css'

export default function WishList(){

    const [list, setList] = useState([])
    const postsPerPage = 20
    const totalPages = list.length/postsPerPage
    const [firstPost, setFirstPost] = useState(0)
    const [lastPost, setLastPost] = useState(20)
    const [currentPage, setCurrentPage] = useState(1)
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/albums')
        .then(res => res.json())
        .then(data => setList(data))
    },[])

    const data = list.slice(firstPost, lastPost).map((item) => {
        return (
            <ProductCard key={item.id} name={item.title} id={item.id}/>
        )
    })

    function previous(){
        setFirstPost(firstPost - 20)
        setLastPost(lastPost - 20)
        setCurrentPage(currentPage - 1)
    }

    function next(){
        setFirstPost(firstPost + 20)
        setLastPost( lastPost + 20)
        setCurrentPage(currentPage + 1)
    }

    return(
        <>
            <p className='text-4xl my-4'>({list.length}) items</p>

            <div className='row m-3'>
                { data }
            </div>

            <div className='mx-auto' id='pagination'>
                <div className='justify-between flex mx-5 mb-4'>
                    <button onClick={() => previous()} className='btn border-1 bg-black text-white px-3'>
                        Prev
                    </button>

                    <p className='my-auto'>Page {currentPage} of {totalPages}</p>

                    <button onClick={() => {next()}} className='btn border-1 bg-black text-white px-3'>
                        Next
                    </button>
                </div>
            </div>
        </>
    )
}