import Index from '../pages/Index';
import filmsDetails from '../pages/filmsDetails';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Error from '../pages/Error';
import Upcomings from '../components/Upcomings';
import { useState, useEffect } from 'react';

export default function Router() {

    const [upcomingsMovies, setUpcomingsMovies] = useState([]);
    const MOVIES_URL = "https://api.themoviedb.org/3/movie/upcoming?api_key=05097c95547f62eb0333604ca5407728&language=en-US&page=1";
    
    useEffect(() => {
    fetch(MOVIES_URL)
    .then(response => response.json())
    .then(data => setUpcomingsMovies(data.results));
    
    }, []);
    console.log(upcomingsMovies);
    return (
        <div>
            <Upcomings upcomingsMovies={upcomingsMovies} setUpcomingsMovies = {setUpcomingsMovies} />
            <BrowserRouter>
            <Index />
            
                {/* <Switch>
                    <Route exact path="/" component={Index}/>
                    <Route path="/movie/:movieID" component={filmsDetails}/>
                    <Route path="/movie" component={MoreInfo}/>

                    <Route component={Error}/>
                </Switch> */}
            </BrowserRouter>
        </div>
    )
}
