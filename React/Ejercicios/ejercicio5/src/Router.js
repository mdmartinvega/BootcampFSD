import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom';

import Ejercicio1 from './pages/Ejercicio1';
import Ejercicio2 from './pages/Ejercicio2';
import Ejercicio3 from './pages/Ejercicio3';
import Ejercicio4 from './pages/Ejercicio4';

export default function Router() {
    return (
        <div>
            <BrowserRouter>

                <NavLink to="/ejercicio1" style={{marginRight: "20px"}}>Ejercicio 1</NavLink>
                <NavLink to="/ejercicio2" style={{marginRight: "20px"}}>Ejercicio 2</NavLink>
                <NavLink to="/ejercicio3">Ejercicio 3</NavLink>
                <NavLink to="/ejercicio4">Ejercicio 4</NavLink>

                <Switch>
                    <Route exact path="/ejercicio1" component={Ejercicio1}/>
                    <Route path="/ejercicio2" component={Ejercicio2}/>
                    <Route path="/ejercicio3" component={Ejercicio3}/>
                    <Route path="/ejercicio4" component={Ejercicio4}/>

                    <Route component={Error}/>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

