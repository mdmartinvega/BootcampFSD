import Public from './pages/Public';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Switch, NavLink} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
    
        <Navbar />

      </Router>
    </div>
  );
}

export default App;


