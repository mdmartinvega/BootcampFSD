import Index from '../pages/Index';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FilmDetailsResults from '../pages/FilmDetailsResults';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Error from '../pages/Error';

export default function Router() {
    return (
        <div className="router">
            <Navbar />
            
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Index}/>
                    <Route path="/movie/:id" component={FilmDetailsResults}/>
                    <Route component={Error}/>
                </Switch> 
            </BrowserRouter>
            <Footer />
        </div>
    )
}
