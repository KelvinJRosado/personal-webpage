import React from 'react';
import '../Styling/home.css'

// Material UI Components
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import { Toolbar, IconButton, Divider, List, ListItem, ListItemText } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import AssignmentIcon from '@material-ui/icons/Assignment';

class Home extends React.Component {

    constructor() {
        super()
        this.state = {
            setOpen: false,
        }
    }

    handleDrawerOpen = () => {
        this.setState({setOpen: true})
    } 

    handleDrawerClose = () => {
        this.setState({setOpen: false})
    } 

    render() {
        const bar = (<div>
            <AppBar>
                <Toolbar>
                    <IconButton onClick={this.handleDrawerOpen} edge="start">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6">Kelvin's Personal Page</Typography>
                </Toolbar>
            </AppBar>
            <Drawer variant="persistent" anchor="left" open={this.state.setOpen}>
                <IconButton onClick={this.handleDrawerClose}>
                    <ChevronLeftIcon/>
                </IconButton>
                <Divider/>
                <List>
                    <ListItem button key="Summary">
                        <AssignmentIcon/>
                        <ListItemText primary="Summary"/>
                    </ListItem>

                    <ListItem button key="Resume">
                        <AssignmentIcon/>
                        <ListItemText primary="Resume"/>
                    </ListItem>

                    <ListItem button key="Links">
                        <AssignmentIcon/>
                        <ListItemText primary="Links"/>
                    </ListItem>
                </List>
            </Drawer>
            <Typography>Hello World!</Typography>
        </div>)

        return bar;
    }
}

export default Home;

// Based on : https://material-ui.com/components/drawers/