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

const styles = {
    form: {
        textAlign: 'center',
        justifyContent: 'center',
    },
    logoicon: {
        margin: '1.5em auto 1.5em auto',
        borderRadius: '.5em'
    },
    pageTitle: {
        margin: '.5em auto .5em auto'
    },
    textField: {
        margin: '.5em auto .5em auto'
    },
    button: {
        marginTop: '1em',
        position: 'relative'
    },
    customError: {
        color: 'red',
        fontSize: '.8em',
        marginTop: '.7em'
    },
    progress: {
        position: 'absolute'
    }
}

export class login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            loading: false,
            errors: {}
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
        this.setState({loading: true});

        const userData = {
            email: this.state.email,
            password: this.state.password
        }

        axios.post(api+'/login', userData)
            .then(res => {
                console.log(res.data);
                this.setState({loading: false
                });
                this.props.history.push('/');
            })
            .catch(err => {
                this.setState({errors: err.response.data, loading: false
                })
            })
        };

    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    render() {
        const {errors, loading} = this.state;
        const {classes} = this.props;
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
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(login);
