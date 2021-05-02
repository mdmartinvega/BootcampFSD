
export default function Upcomings({upcomingsMovies}) {

    return  (
        <div class="row container mx-auto">
            {
                upcomingsMovies.map(movie => {
                    return (
                        <div className="card w-25 col-3">
                            <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} className="card-img-top h-50" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{movie.original_title}</h5>
                                <p>{movie.release_date}</p>
                                <p>{movie.vote_average}</p>
                            </div>
                            <button className="btn btn-info btn-sm w-25 mb-4">+</button>
                        </div>
                    )
                })  
            }      
        </div>
        )
}
