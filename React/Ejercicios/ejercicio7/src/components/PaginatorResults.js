import React from 'react'

export default function PaginatorResults() {
    const changePage = (e) => {
        if (e.target.className === "previous" && page > 1) {
            page--;
        } else if (e.target.className ==="next" && page < upcomingsMovies.length) {
            page++;
            
        }
    }
    return (
        <div>
            
        </div>
    )
}
