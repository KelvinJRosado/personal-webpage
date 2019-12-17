import React from 'react';
import '../Styling/notfound.css'

// Material UI Components
import Typography from '@material-ui/core/Typography';

class NotFound extends React.Component {

    render() {
        return (
            <Typography variant="h1">Error 404. Page not found</Typography>
        )
    }

}

export default NotFound