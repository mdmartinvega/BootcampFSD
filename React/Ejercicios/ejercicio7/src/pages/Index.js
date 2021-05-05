import Upcomings from '../components/Upcomings';
import { useState, useEffect } from 'react';


export default function Index() {


    const [upcomingsMovies, setUpcomingsMovies] = useState([]);
    const MOVIES_URL = "https://api.themoviedb.org/3/movie/upcoming?api_key=05097c95547f62eb0333604ca5407728&language=en-US&page=1";
    
    useEffect(() => {
    fetch(MOVIES_URL)
    .then(response => response.json())
    .then(data => setUpcomingsMovies(data.results));
    
    }, []); 

    return (
        <div className="index">
            
            <Upcomings upcomingsMovies={upcomingsMovies} setUpcomingsMovies={setUpcomingsMovies} />
        </div>
    )
}


