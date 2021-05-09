import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

export default function FilmDetailsResults() {
    
    const {id} = useParams();
    const DETAILS_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=05097c95547f62eb0333604ca5407728&language=en-US`;

    const [filmDetails, setFilmDetails] = useState({})

    useEffect(() => {
        fetch(DETAILS_URL)
        .then(response => response.json())
        .then(data => setFilmDetails(data));
        }, []); 

    return (
        <div className="filmdetails">
            <img src={`https://image.tmdb.org/t/p/w500/${filmDetails.poster_path}`} className="card-img-top h-50" alt="..." />
            <div>
                <p className="titleDetails">{filmDetails.title}</p>
                <p className="tagDetails">{filmDetails.tagline}</p>
                <p className="releaseDetails">Fecha de estreno: {filmDetails.release_date}</p>
                    <div className="genreDetails">
                        {filmDetails.genres?.map(genre => {
                            return <div> {`${genre.name} `} </div>;
                        })  
                        }
                    </div> 
                <p className="overviewDetails">{filmDetails.overview}</p>  
                <a href={`http://www.imdb.com/title/${filmDetails.imdb_id}`}><button className="logo"></button></a>  
            </div>
        </div>
    )
}
