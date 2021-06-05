import './App.scss';
import Home from './components/Home';
import Latest from './components/Latest';
import Popular from './components/Popular';
import Peliculas from './views/Movies';
import Detalle from './views/Detalle';
import Series from './views/Series';
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
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));
  const classes = useStyles();

  return (
    <div className="App">
      <div className="Nav">
      <div className={classes.root}>
      <AppBar position="static" >
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Movie Finder
          </Typography>
          <Typography className={classes.title} variant="h6" noWrap>
          <BrowserRouter>
              <Toolbar className="navegation"> 
                <Typography ><Link exact to="/" >Home</Link></Typography>
                <Typography><Link to="/Latest">Latest</Link></Typography>
                <Typography><Link to="/Popular">Popular</Link></Typography>

              </Toolbar>

            </BrowserRouter>
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
        <>
          <BrowserRouter>
           
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/Latest" component={Latest} />
              <Route exact path="/Popular" component={Popular} />
              <Route exact path="/:type/:id" component={Detalle} />
             
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

