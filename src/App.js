import './App.scss';
import Home from './components/Home';
import Latest from './components/Latest';
import Popular from './components/Popular';
import Peliculas from './views/Movies';
import Detalle from './views/Detalle';
import Series from './views/Series';
import Search from './views/Search';
import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';

import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import AppBar from '@material-ui/core/AppBar';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import { Navbar } from 'reactstrap';



const App = () => {


  const useStyles = makeStyles((theme) => ({
    root: {
      
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
  }));
  const classes = useStyles();

  return (
    <div className="App">
      <BrowserRouter>
      <div className="Nav">
      <div className={classes.root}>
        
          <AppBar position="static" >
            <Toolbar>
              <Typography className={classes.title} variant="h6" noWrap>
                Movie Finder
              </Typography>
              <Typography className={classes.title} variant="h6" noWrap>
              
                  <Toolbar className="navegation"> 
                    <Typography ><Link exact to="/" >Home</Link></Typography>
                    <Typography><Link to="/Latest">Latest</Link></Typography>
                    <Typography><Link to="/Popular">Popular</Link></Typography>
                    <Typography><Link to="/Search">Search</Link></Typography>

                  </Toolbar>

              
              </Typography>
              
            </Toolbar>
          </AppBar>
      
         
            
            
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/Latest" component={Latest} />
                <Route exact path="/Popular" component={Popular} />
                <Route exact path="/:type/:id" component={Detalle} />
                <Route exact path="/Search" component={Search} />

      

              </Switch>
        

        

      </div>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

