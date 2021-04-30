import Card from '../components/Card'
import { useState, useEffect } from 'react';

export default function Index() {

    const [moviesData, setMoviesData] = useState({});
    
    
    const MOVIES_URL = "https://api.themoviedb.org/3/movie/upcoming?api_key=05097c95547f62eb0333604ca5407728&language=en-US&page=1";

    const MOVIES_IMAGES = "https://api.themoviedb.org/3/movie/{movie_id}/images?api_key=05097c95547f62eb0333604ca5407728&language=en-US";
   
    useEffect(() => {
        fetch(`${MOVIES_URL}${MOVIES_IMAGES}`)
        .then(response => response.json())
        .then(data => setMoviesData(data.results));
        
    }, []);

    return (
     <div className="text-left">
            {
            moviesData.map((movie) => {
                return <ul key={movie.id} className="list-group">
                    <li ><Card />
                    </li>
                </ul>
            })
            
            }  
            
        </div>
    )
}
