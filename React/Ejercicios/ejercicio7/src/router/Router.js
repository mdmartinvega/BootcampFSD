import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Index from '../pages/Index';
import MoreInfo from '../pages/MoreInfo';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Error from '../pages/Error';




export default function Router() {

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
