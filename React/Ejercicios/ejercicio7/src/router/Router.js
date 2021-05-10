import Index from '../pages/Index';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FilmDetailsResults from '../pages/FilmDetailsResults';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

export default function Router() {
    return (
        <div className="router">
            <Navbar />
            
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Index}/>
                    <Route path="/movie/:id" component={FilmDetailsResults}/>
                </Switch> 
            </BrowserRouter>
            <Footer />
        </div>
    )
}
