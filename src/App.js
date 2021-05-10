import './App.css';
import Index from './pages/Index';
import Disc from './pages/Disc';
import Contact from './pages/Contact';
import Team from './pages/Team';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop';



function App() {
  return (
    <div className="app-container">
      <Router>
        <ScrollToTop />
        <Switch>
          <Route path='/' exact component={Index} />
          <Route path='/discography' exact component={Disc} />
          <Route path='/team' exact component={Team} />
          <Route path='/contact' exact component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

