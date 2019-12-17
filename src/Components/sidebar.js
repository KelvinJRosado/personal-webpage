import React from 'react';
import '../Styling/sidebar.css'
import Link from '@material-ui/core/Link';
import { slide as Menu } from 'react-burger-menu'
import HomeIcon from '@material-ui/icons/Home';
import WorkIcon from '@material-ui/icons/Work';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import LinkIcon from '@material-ui/icons/Link';

class SideBar extends React.Component {
    showSettings (event) {
      event.preventDefault();
    }
  
    linkStyle = {
        "color": "white",
        "padding": "25px",
    }

    render () {
        return (
            <Menu width={ '20%' } disableAutoFocus>
                <Link style={this.linkStyle} href="/home" onClick={console.log("Pressed home")}>  Home</Link>
                <Link style={this.linkStyle} href="/summary" onClick={console.log("Pressed summary")}>  Summary</Link>
                <Link style={this.linkStyle} href="/resume" onClick={console.log("Pressed resume")}>  Resume</Link>
                <Link style={this.linkStyle} href="/links" onClick={console.log("Pressed links")}>  Links</Link>
            </Menu>
        );
    }
}

export default SideBar;