// Frameworks
import React from 'react';

// Material UI
import { makeStyles } from '@material-ui/core/styles';


import plantImg from '../../images/house-plant.png';

// Custom Styles
const useCustomStyles = makeStyles(theme => ({
    plantSectionContainer: {
        display: 'flex',
        height: '100%',
        alignItems: 'stretch',
        justifyContent: 'center',
    },
    plant: {
        width: '50%',
        paddingTop: theme.mixins.toolbar.minHeight,
        backgroundColor: theme.palette.grey[100],
        // boxShadow: 'inset 0 0 10px 5px rgba(0,0,0,0.1)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center 15vh',
        backgroundSize: 'contain',

        // [theme.breakpoints.down('md')]: {
        //     backgroundSize: '50%',
        // },
    },
    content: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '50%',
        paddingTop: theme.mixins.toolbar.minHeight,
    },
}));

function PlantSection({ children }) {
    const classes = useCustomStyles();

    return (
        <div className={classes.plantSectionContainer}>
            <div className={classes.plant} style={{backgroundImage:`url(${plantImg})`}}>&nbsp;</div>
            <div className={classes.content}>
                {children}
            </div>
        </div>
    );
}

export default PlantSection;
