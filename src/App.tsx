import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import SamCard from './components/Nav/SamCard';
import { Container, makeStyles, createStyles, Toolbar, ThemeProvider, createMuiTheme } from '@material-ui/core';
import { responsiveFontSizes } from '@material-ui/core/styles';

const Home = lazy(() => import('./components/Welcome/Welcome'));
const About = lazy(() => import('./components/About/About'));
const Projects = lazy(() => import('./components/Projects/Projects'));
const Skills = lazy(() => import('./components/Skills/Skills'));
const Resume = lazy(() => import('./components/Resume/Resume'));

const useStyles = makeStyles(() =>
  createStyles({
    content: {
      flexGrow: 1,
      textAlign: 'center',
      fontFamily: 'lato',
    },
  }),
);

let theme = createMuiTheme({
  typography: {
    fontFamily: 'lato',
  },
  palette: {
    primary: {
      main: '#b21919',
    },
  },
});
theme = responsiveFontSizes(theme);

function App(): JSX.Element {
  const classes = useStyles();

  return (
    <div style={{ display: 'flex', height: '100%' }}>
      <Router>
        <ThemeProvider theme={theme}>
          {/* <Navbar /> */}
          <SamCard />
          <Container className={classes.content}>
            <Toolbar />
            <br />
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/About" component={About} />
                <Route path="/Projects" component={Projects} />
                <Route path="/Skills" component={Skills} />
                <Route path="/Resume" component={Resume} />
              </Switch>
            </Suspense>
          </Container>
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
