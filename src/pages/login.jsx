import React, {Component} from 'react'
import PropTypes from 'prop-types';
import srIcon from '../images/favicon.png'
import axios from 'axios';
import api from '../API';
import {Link} from 'react-router-dom';

//Mui elements
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {TextField} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

// redux stuff
import { connect } from 'react-redux';
import { loginUser } from '../redux/actions/userActions';


const styles = (theme) => ({
    ...theme.styles
});

export class login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errors: {}
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // this.setState({
        //     [e.target.name]: e.target.value
        // })

        const userData = {
            email: this.state.email,
            password: this.state.password
        }
        this.props.loginUser(userData,this.props.history);
    };


    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    render() {
        const {errors} = this.state;
        const {classes, UI:{loading}} = this.props;
        return (
            <Grid container="container" className={classes.form}>
                <Grid item="item" sm="sm"/>
                <Grid item="item" sm="sm">
                    <img src={srIcon} className={classes.logoicon} alt="sr icon"/>
                    <Typography variant="h3" className={classes.pageTitle}>
                        Login
                    </Typography>
                    <form noValidate="noValidate" onSubmit={this.handleSubmit}>
                        <TextField
                            id="email"
                            name="email"
                            type="email"
                            label="Email"
                            helperText={errors.email}
                            error={errors.email ? true : false}
                            fullWidth="fullWidth"
                            className={classes.textField}
                            value={this.state.email}
                            onChange={this.handleChange}/>
                        <TextField
                            id="password"
                            name="password"
                            type="password"
                            label="Password"
                            helperText={errors.password}
                            error={errors.password ? true : false}
                            fullWidth="fullWidth"
                            className={classes.textField}
                            value={this.state.password}
                            onChange={this.handleChange}/>
                            {errors.general && (<Typography varient="body2" className={classes.customError}>{errors.general}</Typography>)}
                        <Button
                            type="submit"
                            varient="contained"
                            color="primary"
                            fullWidth="fullWidth"
                            disabled={loading}
                            className={classes.button}>
                                Login
                                { loading && (<CircularProgress size={70} className={classes.progress}/>)}
                                
                        </Button><br/>
                        <small><br/>Don't have an account? <Link to="/signup">Signup</Link></small>
                    </form>
                </Grid>
                <Grid item="item" sm="sm"/>
            </Grid>
        )
    }
}

login.propTypes = {
  classes: PropTypes.object.isRequired,
  loginUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  user: state.user,
  UI: state.UI
});

const mapActionsToProps = {
  loginUser
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(login));
