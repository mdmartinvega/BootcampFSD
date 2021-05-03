import {useHistory} from "react-router-dom";

export default function Card({movie}) {
    const history = useHistory();

    function handleClick(event) {
        history.push(`/movie/${event.target.id}`);
    }

    return (
        
        <div className="card">
            <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="..." />
            <p className="title">{movie.original_title}</p>
            {/* <p className="date">{movie.release_date}</p> */}
            <div className="father-average">
                <p className="average">{movie.vote_average}</p>
            </div>
            <button className="btn" id={movie.id} onClick={handleClick}>+</button>
        </div>

    )
}

