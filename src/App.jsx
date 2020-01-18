import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
// import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import {ThemeProvider as MuiThemeProvider} from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import themeFile from './util/theme'
import './App.css';

//REDUX
import {Provider} from 'react-redux';
import store from './redux/store';

//COMPONENTS
import Navbar from './components/Navbar';
import AuthRoute from './util/AuthRoute';

//PAGES
import home from './pages/home';
import signup from './pages/signup';
import login from './pages/login';

const theme = createMuiTheme(themeFile);

let authenticated;
const token = localStorage.FBIdToken;
if(token){
  const decodedToken = jwtDecode(token);
  console.log(decodedToken);
  if (decodedToken.exp * 3000 < Date.now()){
    window.location.href = '/login'
    authenticated = false;
  }
  else {
    authenticated = true;
  }
}

class App extends Component {
  // constructor(props) {
  //   super(props)

  // }

 

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Provider store={store}>
        <Router>
          <Navbar/>
          <div className="container">
          <Switch>
            <Route exact path="/" component={home}/>
            <AuthRoute exact path="/signup" component={signup} authenticated={authenticated}/>
            <AuthRoute exact path="/login" component={login} authenticated={authenticated}/>
          </Switch>
          </div>
        </Router>
        </Provider>
      </MuiThemeProvider>
    )
  }
}



export default App
