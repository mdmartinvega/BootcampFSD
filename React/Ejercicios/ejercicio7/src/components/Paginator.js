import React from 'react'

export default function Paginator({upcomingsMovies, setPage}) {
 let totalPages = [];

 for (let index = 1; index <= upcomingsMovies.total_pages; index++) {
     totalPages.push(index);
 }
    return (
        <div className="buttons">
                {
                totalPages.map(page => {
                    return (
                        <button onClick={()=>setPage(page)}>{`${page}`}</button>
                        
                    )
                })   
            } 
        </div>
    )
}
