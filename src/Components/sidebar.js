import React from 'react';
import '../Styling/sidebar.css'
import { slide as Menu } from 'react-burger-menu'
import HomeIcon from '@material-ui/icons/Home';
import WorkIcon from '@material-ui/icons/Work';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import LinkIcon from '@material-ui/icons/Link';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

class SideBar extends React.Component {
    showSettings (event) {
      event.preventDefault();
    }
  
    linkStyle = {
        "color": "white",
        "padding": "25px",
    }

    buttonStyle = {
        "color": "primary",
        "textAlign": "center",
        "width": "100%",
        "padding": "25px"
    }

    render () {

        const classes = makeStyles(theme => ({
            button: {
              margin: theme.spacing(1),
            },
          }));

        return (
            <Menu disableAutoFocus>
                <Button
                variant="contained"
                fullWidth={true}
                href="/home"
                startIcon={<HomeIcon />}
                style={this.buttonStyle}
                className={classes.button}
                >
                    Home
                </Button>

                <Button
                variant="contained"
                fullWidth={true}
                href="/summary"
                startIcon={<MenuBookIcon />}
                style={this.buttonStyle}
                >
                    Summary
                </Button>

                <Button
                variant="contained"
                fullWidth={true}
                href="/resume"
                startIcon={<WorkIcon />}
                style={this.buttonStyle}
                >
                    Resume
                </Button>

                <Button
                variant="contained"
                fullWidth={true}
                href="/links"
                startIcon={<LinkIcon />}
                style={this.buttonStyle}
                >
                    Links
                </Button>
            </Menu>
        );
    }
}

export default SideBar;