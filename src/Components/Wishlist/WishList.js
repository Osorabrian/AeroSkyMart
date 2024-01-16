import React, {useState, useEffect} from 'react'
import ProductTile from '../Store/ProductTile'

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
            <ProductTile key={item.id} name={item.title} id={item.id}/>
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
            <p className='text-4xl'>{list.length} items</p>

            { data }

            <div className='justify-between flex mx-5 mb-4'>

                <button onClick={() => previous()} className='btn border-1 bg-black text-white'>
                    Prev
                </button>

                <p className='my-auto'>Page {currentPage} of {totalPages}</p>

                <button onClick={() => {next()}} className='btn border-1 bg-black text-white'>
                    Next
                </button>

            </div>
        </>
    )
}