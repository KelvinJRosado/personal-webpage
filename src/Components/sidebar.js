import React from 'react';
import '../Styling/sidebar.css'
import { slide as Menu } from 'react-burger-menu'
import Button from '@material-ui/core/Button';

class SideBar extends React.Component {
    showSettings (event) {
      event.preventDefault();
    }
  
    linkStyle = {
        "color": "white",
        "padding": "25px",
        "margin": "auto",
    }

    buttonStyle = {
        "color": "primary",
        "textAlign": "center",
        "width": "100%",
        "margin": "auto",
        "padding": "20px"
    }

    render () {

        return (
            <Menu disableAutoFocus>
                <Button
                variant="contained"
                fullWidth={true}
                href="/home"
                style={this.buttonStyle}
                >
                    Home
                </Button>

                <Button
                variant="contained"
                fullWidth={true}
                href="/summary"
                style={this.buttonStyle}
                >
                    Summary
                </Button>

                <Button
                variant="contained"
                fullWidth={true}
                href="/resume"
                style={this.buttonStyle}
                >
                    Resume
                </Button>

                <Button
                variant="contained"
                fullWidth={true}
                href="/links"
                style={this.buttonStyle}
                >
                    Links
                </Button>
            </Menu>
        );
    }
}

export default SideBar;