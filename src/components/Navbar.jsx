import React, { Component } from 'react';
import {Link} from 'react-router-dom';
//MUI
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';


export class Navbar extends Component {
    render() {
        return (
            <AppBar position="fixed">
                <Toolbar className="nav-container">
                    <Button className="nav-button" component={Link} to="/">Home</Button>
                    <Button className="nav-button" component={Link} to="/login">Login</Button>
                    <Button className="nav-button" component={Link} to="/signup">Signup</Button>
                </Toolbar>
            </AppBar>
        )
    }
}

export default Navbar
