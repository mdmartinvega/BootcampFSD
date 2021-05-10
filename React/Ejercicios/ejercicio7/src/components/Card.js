import {useHistory} from "react-router-dom";
import {PLACEHOLDER_URL, IMAGE_URL} from '../Settings';

export default function Card({movie}) {
    const history = useHistory();

    function handleClick(event) {
        history.push(`/movie/${event.target.id}`);
    }

    const src = movie.poster_path ? `${IMAGE_URL}${movie.poster_path}` : PLACEHOLDER_URL;
    
    return (
        <div className="card">
            <img src={src} alt="..." />
            <p className="title">{movie.title}</p>
            <p className="date">{movie.release_date}</p>
            <p class="description">{movie.overview}</p>
            <div className="averageBtn">
                <p className="average">{movie.vote_average}</p>
                <button className="btn" id={movie.id} onClick={handleClick}>+</button>
            </div>
        </div>

    )
}

