import Input from '../components/Input';
import { useState, useEffect } from 'react';
import {ALLMOVIES_URL, TOKEN} from '../Settings';

export default function Index() {

    const [upcomingsMovies, setUpcomingsMovies] = useState({});
    const [page, setPage] = useState(1);

    const MOVIES_URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${TOKEN}&language=en-US&page=${page}`;
    
    useEffect(() => {
    fetch(MOVIES_URL)
    .then(response => response.json())
    .then(data => setUpcomingsMovies(data));
    
    }, [page, setUpcomingsMovies, MOVIES_URL]); 

    const[searchedMovies, setSearchedMovies] = useState([]);
    const[input, setInput] = useState("");


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


