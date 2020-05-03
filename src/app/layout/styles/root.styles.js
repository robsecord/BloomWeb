
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

}));
