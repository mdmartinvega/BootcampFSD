import {useHistory} from "react-router-dom";

export default function Card({movie}) {
    const history = useHistory();

    function handleClick(event) {
        history.push(`/movie/${event.target.id}`);
    }

    return (
        
        <div className="card">
            <div className="imageDescription">
                <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="..." />
                <p class="description">{movie.overview}</p>
            </div>
            <p className="title">{movie.original_title}</p>
            {/* <p className="date">{movie.release_date}</p> */}
            <div className="father-average">
                <p className="average">{movie.vote_average}</p>
            </div>
            {/* <li className={thing.completed?"list-group-item list-group-item-secondary" : "list-group-item"} */}
            <button className="btn" id={movie.id} onClick={handleClick}>+</button>
        </div>

    )
}

