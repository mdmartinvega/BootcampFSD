import Upcomings from '../components/Upcomings';
import { useState, useEffect } from 'react';
import SearchedResults from '../components/SearchedResults';


export default function Index() {

    const [upcomingsMovies, setUpcomingsMovies] = useState([]);
    const MOVIES_URL = "https://api.themoviedb.org/3/movie/upcoming?api_key=05097c95547f62eb0333604ca5407728&language=en-US&page=1";
    
    useEffect(() => {
    fetch(MOVIES_URL)
    .then(response => response.json())
    .then(data => setUpcomingsMovies(data.results));
    
    }, []); 

    const[searchedMovies, setSearchedMovies] = useState([]);
    const[input, setInput] = useState("");

    const ALLMOVIES_URL = `https://api.themoviedb.org/3/search/movie?api_key=05097c95547f62eb0333604ca5407728&query=`;


    useEffect(() => {
        if (input) {
            fetch(`${ALLMOVIES_URL}${input}`)
            .then(response => response.json())
            .then(data => setSearchedMovies(data.results));
        }
    }, [input]); 
    
    return (
        <div className="input">
            <form><input 
            value={input} 
            onChange={e => setInput(e.target?.value)} 
            placeholder="¿Qué película quieres buscar?"/>
            </form>

            <div className="index">{
                input
                ? <SearchedResults searchedMovies={searchedMovies} setSearchedMovies={setSearchedMovies} input={input} setInput={setInput}/>
                : <Upcomings upcomingsMovies={upcomingsMovies} setUpcomingsMovies={setUpcomingsMovies} />
            }
            
            </div>
        </div>
    )
}


