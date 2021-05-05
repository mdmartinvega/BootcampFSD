import SearchedResults from '../components/SearchedResults';
import { useState, useEffect } from 'react';

export default function IndexResults() {

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
        <div className="index">
            <SearchedResults searchedMovies={searchedMovies} setSearchedMovies={setSearchedMovies} input={input} setInput={setInput}/>
        </div>
    )
}
