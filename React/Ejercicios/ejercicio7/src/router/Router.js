import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Index from '../pages/Index';
import MoreInfo from '../pages/MoreInfo';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Error from '../pages/Error';


import { useState, useEffect } from 'react';

export default function Router() {

    const [moviesData, setMoviesData] = useState([]);
    
    
    const MOVIES_URL = "https://api.themoviedb.org/3/movie/upcoming?api_key=05097c95547f62eb0333604ca5407728&language=en-US&page=1";

    const MOVIES_IMAGES = "https://api.themoviedb.org/3/movie/{movie_id}/images?api_key=05097c95547f62eb0333604ca5407728&language=en-US";
   
    useEffect(() => {
        fetch(`${MOVIES_URL}${MOVIES_IMAGES}`)
        .then(response => response.json())
        .then(data => setMoviesData(data.results));
        
    }, []);

    return (
        <div>
            <Index moviesData = {moviesData} setMoviesData = {setMoviesData}/>
            {/* <BrowserRouter>
                <Navbar />
               
                <Switch>
                    <Route exact path="/" component={Index}/>
                    <Route path="/movie/:movieID" component={MoreInfo}/>
                    <Route path="/movie" component={MoreInfo}/>

                    <Route component={Error}/>
                </Switch>
                <Footer />
            </BrowserRouter> */}
        </div>
    )
}
