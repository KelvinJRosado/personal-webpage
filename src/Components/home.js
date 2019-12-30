import React from 'react';
import '../Styling/home.css'

// Images
import Profile from '../Images/profile.jpg'

// Material UI Components
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';

class Home extends React.Component {

    render() {
        return (
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
                style={{ minHeight: '10vh' }}>
                <Card raised={true}>
                    <CardActionArea>
                        <CardMedia>
                            <img src={Profile} alt='profile'/>
                        </CardMedia>
                    </CardActionArea>
                </Card>
            </Grid>
        )
    }
}

export default Home;