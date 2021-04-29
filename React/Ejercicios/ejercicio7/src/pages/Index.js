
export default function Index({ moviesData }) {

    return (
     <div className="text-left">
            {
            moviesData.map((movie) => {
                return <ul key={movie.id} className="list-group">
                    <li ><img src={movie?.poster_path} alt=""/>{movie?.original_title}{movie?.release_date}{movie?.vote_average}
                    </li>
                </ul>
            })
            
            }  
            
        </div>
    )
}
