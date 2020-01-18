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

const styles = (theme) => ({
    ...theme.styles
});

export class signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            confirmPassword:'',
            handle:'',
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

        const newUserData = {
            email: this.state.email,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword,
            handle: this.state.handle
        }

        axios.post(api+'/signup', newUserData)
            .then(res => {
                console.log(res.data);
                localStorage.setItem('FBIdToken', `Bearer ${res.data.token}` );
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
            <Grid container className={classes.form}>
                <Grid item sm/>
                <Grid item sm>
                    <img src={srIcon} className={classes.logoicon} alt="sr icon"/>
                    <Typography variant="h3" className={classes.pageTitle}>
                        Signup
                    </Typography>
                    <form noValidate="noValidate" onSubmit={this.handleSubmit}>
                        <TextField
                            id="email"
                            name="email"
                            type="email"
                            label="Email"
                            helperText={errors.email}
                            error={errors.email ? true : false}
                            fullWidth
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
                            fullWidth
                            className={classes.textField}
                            value={this.state.password}
                            onChange={this.handleChange}/>
                             <TextField
                            id="confirmPassword"
                            name="confirmPassword"
                            type="password"
                            label="Confirm Password"
                            helperText={errors.confirmPassword}
                            error={errors.confirmPassword ? true : false}
                            fullWidth
                            className={classes.textField}
                            value={this.state.confirmPassword}
                            onChange={this.handleChange}/>
                             <TextField
                            id="handle"
                            name="handle"
                            type="text"
                            label="Handle"
                            helperText={errors.handle}
                            error={errors.handle ? true : false}
                            fullWidth
                            className={classes.textField}
                            value={this.state.handle}
                            onChange={this.handleChange}/>
                            {errors.general && (<Typography varient="body2" className={classes.customError}>{errors.general}</Typography>)}
                        <Button
                            type="submit"
                            varient="contained"
                            color="primary"
                            fullWidth
                            disabled={loading}
                            className={classes.button}>
                                Signup
                                { loading && (<CircularProgress size={70} className={classes.progress}/>)}
                                
                        </Button><br/>
                        <small><br/>Already have an account? Login <Link to="/signup">here</Link></small>
                    </form>
                </Grid>
                <Grid item sm/>
            </Grid>
        )
    }
}

signup.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(signup);
