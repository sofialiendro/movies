import './App.scss';
import Home from './components/Home';
import Peliculas from './views/Peliculas';
import Series from './views/Series';

import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

const App = () => {
  
  return (
    <div className="App">
       <div className="Nav">
      <>
      <BrowserRouter>
      <nav className="navegation">
        <p><Link exact to="/">Home</Link></p>
        <p><Link to="/peliculas">Peliculas</Link></p>
        <p><Link to="/series">series</Link></p>
        <input type="text" placeholder="Búsqueda..."/>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/peliculas" component={Peliculas} />
        <Route exact path="/series" component={Series} />
      </Switch>
      </BrowserRouter>
      
      </>

      
    </div> 
    </div>
  );
}

export default App;