import React from 'react'

export default function Paginator({page, setPage, upcomingsMovies}) {

    const changePage = (e) => {
        if (e.target.className === "previous" && page > 1) {
            page--;
        } else if (e.target.className ==="next" && page < upcomingsMovies.length) {
            page++;
            
        }
    }

    return (
        <div>
           <button onClick={e => setPage(e.target.value)}  className=" previous">Anterior</button>
           <button onClick={e => setPage(e.target.value)} className="next">Siguiente</button> 
        </div>
    )
}
