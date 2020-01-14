import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import './App.css';


//COMPONENTS
import Navbar from './components/Navbar';

//PAGES
import home from './pages/home';
import signup from './pages/signup';
import login from './pages/login';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#00838f',
      light:'#339ba5',
      dark:'#005b64',
      contrastText:'#005b64'
    },
    secondary: {
      main: '#fdd835',
      light:'#fddf5d',
      dark:'#b19725',
      contrastText:'#339ba5'
    }
  }
});

class App extends Component {
  constructor(props) {
    super(props)

  }

  componentWillMount() {

  }

  componentDidMount() {

  }

  componentWillReceiveProps(nextProps) {

  }

  shouldComponentUpdate(nextProps, nextState) {

  }

  componentWillUpdate(nextProps, nextState) {

  }

  componentDidUpdate(prevProps, prevState) {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <Navbar/>
          <div className="container">
          <Switch>
            <Route exact path="/" component={home}/>
            <Route exact path="/signup" component={signup}/>
            <Route exact path="/login" component={login}/>
          </Switch>
          </div>
        </Router>
      </MuiThemeProvider>
    )
  }
}



export default App
