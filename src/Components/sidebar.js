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
  
    render () {
        return (
            <Menu width={ '20%' }>
                <div>
                    <HomeIcon />
                    <Link href="/home" onClick={console.log("Pressed home")}>Home</Link>
                </div>

                <div>
                    <MenuBookIcon />
                    <Link href="/summary" onClick={console.log("Pressed summary")}>Summary</Link>
                </div>

                <div>
                    <WorkIcon />
                    <Link href="/resume" onClick={console.log("Pressed resume")}>Resume</Link>
                </div>

                <div>
                    <LinkIcon />
                    <Link href="/links" onClick={console.log("Pressed links")}>Links</Link>
                </div>
            </Menu>
        );
    }
}

export default SideBar;