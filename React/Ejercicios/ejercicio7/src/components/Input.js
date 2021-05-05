import {useState, useEffect} from 'react';
import Card from '../components/Card';

export default function Input() {

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

    {
        searchedMovies.map(movie => {
            return (
                <Card movie={movie}/>
            )
        })  
    }      
    </div>)
}
