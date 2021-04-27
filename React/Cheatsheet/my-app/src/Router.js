import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Index from './pages/Index';
import Dashboard from './pages/Dashboard';
import Record from './pages/Record';
import Error from './pages/Error'

export default function Router() {
    return (
        <div>
            <BrowserRouter>

                <NavLink to="/" activeClassName="active" style={{marginRight: "20px"}}>Ir a inicio</NavLink>
                <NavLink to="/dashboard" style={{marginRight: "20px"}}>Panel de control</NavLink>
                <NavLink to="/record/5">Record</NavLink>

                <Switch>
                    <Route exact path="/" component={Index}/>
                    <Route path="/dashboard" component={Dashboard}/>

                    {/* Definimos nombre de parámetro = user */}
                    <Route path="/record/:user" component={Record}/>

                    <Route component={Error}/>
                </Switch>
            </BrowserRouter>
            <h6>Footer estático</h6>
        </div>
    )
}
