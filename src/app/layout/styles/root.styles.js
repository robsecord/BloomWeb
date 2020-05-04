
// Material UI
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
    // App Layout
    root: {
        display: 'flex',
        background: '#fff',
    },
    toolbar: {},
    sidePanel: {
        width: '20vw',
    },
    sidePanelContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100vh',
        height: '20vw',
        transform: 'rotate(-90deg) translate(-100%, 0)',
        transformOrigin: '0 0',
        
        '& p': {
            margin: 0,
            fontSize: 40,
            lineHeight: '1.4em',
            textAlign: 'center',
            textTransform: 'uppercase',
            fontFamily: theme.typography.body1.fontFamily,

            '& strong': {
                fontSize: 50,
            },
        }
    },
    contentWrapper: {
        display: 'flex',
        alignItems: 'stretch',
    },
    content: {
        width: '80vw',

        '& > div': {
            height: '100%',
        },
    },

    // HeaderBar
    appBar: {},
    menuButton: {},

    // Side Menu
    drawer: {},
    drawerPaper: {},

    // Common Loading Spinner
    loadingContainer: {
        margin: '2rem 0',
    },
    loadingPaper: {
        padding: '1rem 1.5rem',

        '& span': {
            marginLeft: '1.4rem',
            fontSize: '1.15rem',
            lineHeight: '2rem',
            verticalAlign: 'super',
            fontFamily: 'Roboto, Courier, monospace',
        }
    },

    // Common Modals
    simpleModal: {
        position: 'absolute',
        top: `50%`,
        left: `50%`,
        transform: `translate(-50%, -50%)`,
        width: theme.spacing(60),
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        borderRadius: '5px',
        padding: theme.spacing(4),
        outline: 'none',
    },

}));
