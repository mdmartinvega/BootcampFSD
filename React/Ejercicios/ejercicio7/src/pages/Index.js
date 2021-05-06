import Upcomings from '../components/Upcomings';
import { useState, useEffect } from 'react';
import SearchedResults from '../components/SearchedResults';
import Paginator from '../components/Paginator';
// import { useParams } from 'react-router-dom'


export default function Index() {

    // const {page} = useParams();

    const [upcomingsMovies, setUpcomingsMovies] = useState([]);
    const [page, setPage] = useState(1)

    const MOVIES_URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=05097c95547f62eb0333604ca5407728&language=en-US&page=${page}`;
    
    useEffect(() => {
    fetch(MOVIES_URL)
    .then(response => response.json())
    .then(data => setUpcomingsMovies(data.results));
    
    }, [MOVIES_URL]); 

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
            placeholder="What film would you like to watch?"/>
            </form>

            <div className="index">{
                input
                ? <SearchedResults searchedMovies={searchedMovies} setSearchedMovies={setSearchedMovies} input={input} setInput={setInput}/>
                : <Upcomings upcomingsMovies={upcomingsMovies} setUpcomingsMovies={setUpcomingsMovies} />
            }
            
            </div>

            <Paginator page={page} setPage={setPage}/>
        </div>
    )

    
}


