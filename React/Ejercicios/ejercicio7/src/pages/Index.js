import Input from '../components/Input';
import { useState, useEffect } from 'react';

export default function Index() {

    const [upcomingsMovies, setUpcomingsMovies] = useState({});
    const [page, setPage] = useState(1);

    const MOVIES_URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=05097c95547f62eb0333604ca5407728&language=en-US&page=${page}`;
    
    useEffect(() => {
    fetch(MOVIES_URL)
    .then(response => response.json())
    .then(data => setUpcomingsMovies(data));
    
    }, [page, setUpcomingsMovies, MOVIES_URL, DETAILS_URL]); 

    const[searchedMovies, setSearchedMovies] = useState([]);
    const[input, setInput] = useState("");

    const ALLMOVIES_URL = `https://api.themoviedb.org/3/search/movie?api_key=05097c95547f62eb0333604ca5407728&query=`;


    useEffect(() => {
        if (input) {
            fetch(`${ALLMOVIES_URL}${input}`)
            .then(response => response.json())
            .then(data => setSearchedMovies(data.results));
        }
    }, [input, setSearchedMovies, ALLMOVIES_URL]); 
    
    return (
        <Input input = {input} setInput={setInput} searchedMovies={searchedMovies} setSearchedMovies = {setSearchedMovies} upcomingsMovies = {upcomingsMovies} setUpcomingsMovies = {setUpcomingsMovies} page = {page} setPage = {setPage}/>
    )
}


