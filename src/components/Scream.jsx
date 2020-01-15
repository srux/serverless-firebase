import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles';
import {Link} from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

// MUI elements

const styles = {
    card: {
        display: 'flex',
        marginBottom:20,
    },
    image: {
        minWidth:200,
    },
    content: {
        padding:25,
        objectFit: 'cover',
    }
}

export class Scream extends Component {
    render() {
        const { classes, scream : { body, createdAt, userImage, userHandle, screamId, likeCount, commentCount } } = this.props // destructuring e.g const classes = this.props.classes
        return (
          <Card className={classes.card}>
            <CardMedia className={classes.image} image={userImage} title="Profile Image"/>
            <CardContent className={classes.content}>
                <Typography variant="h5" 
                component={Link}
                color="primary" 
                to={`/users/${userHandle}`}>
                    {userHandle}
                    </Typography>
                <Typography variant="body2" color="textSecondary">{createdAt}</Typography>
                <Typography variant="body1">{body}</Typography>
            </CardContent>
          </Card>
        )
    }
}

export default withStyles(styles)(Scream);
