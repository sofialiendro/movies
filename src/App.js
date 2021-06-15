
import Home from './components/Home';
import Latest from './components/Latest';
import Popular from './components/Popular';
import Detalle from './views/Detalle';
import Search from './views/Search';
import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';



const App = () => {


  const useStyles = makeStyles((theme) => ({
    root: {

      flexGrow: 1,
    },
    container: {
      backgroundColor: "red",
      height: "80px",
    },
    navegation: {
      display: 'flex',
      justifyContent: 'flex-end',

    },
    navLink: {
      marginRight: theme.spacing(2),
      color: 'black',
      fontWeight: 'bold',
      textDecoration: 'none',
      '&:hover': {
        color: "white",
      },
      "@media (max-width: 300px)": {
        fontSize: "11px",


      },
      "@media (min-width: 700px)": {
        fontSize: "20px",

      }
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
      "@media (max-width: 578px)": {
        fontSize: "15px",
        fontColor: "black"

      },

    },
    navLinkTitle: {
      textDecoration: 'none',
      color: 'white',
      fontWeight: "bolder",
      fontSize:"30px",
      "@media (max-width: 578px)": {
        fontSize: "15px",

      },

    },


  }));
  const classes = useStyles();

  return (
    <div className="App">
      <BrowserRouter>
        <div className="Nav">
          <div className={classes.root}>

            <AppBar position="static" className={classes.container} >
              <Toolbar>
                <Typography className={classes.title}>
                  <Link className={classes.navLinkTitle} exact to="/" >Movie Finder</Link>
                </Typography>
                <Typography className={classes.title}>

                  <Toolbar className={classes.navegation}>
                    <Link className={classes.navLink} exact to="/" >Home</Link>
                    <Link className={classes.navLink} to="/Latest">Latest</Link>
                    <Link className={classes.navLink} to="/Popular">Popular</Link>
                    <Link className={classes.navLink} to="/Search">Search</Link>

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

