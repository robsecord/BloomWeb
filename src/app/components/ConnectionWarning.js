// Frameworks
import React from 'react';
import UseAnimations from 'react-useanimations';
import _ from 'lodash';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

// Data Context for State
import { useNetworkContext } from '../contexts/network';

// Custom Styles
const useCustomStyles = makeStyles(theme => ({
    alertBox: {
        position: 'fixed',
        top: theme.mixins.toolbar.minHeight + 6,
        right: 32,
        background: theme.palette.background.default,

        '& .MuiAlert-icon': {
            padding: 0,
        }
    }
}));

function ConnectionWarning() {
    const customClasses = useCustomStyles();
    const [ networkState ] = useNetworkContext();
    const { connectionState } = networkState;
    const connectedType = _.get(connectionState, 'type', '');
    const connectionMessage = _.get(connectionState, 'message', '');

    if (_.isEmpty(connectionState) || connectedType !== 'WEB3_WRONG_NETWORK') {
        return '';
    }

    return (
        <Alert
            variant="outlined"
            severity="error"
            className={customClasses.alertBox}
            icon={<UseAnimations animationKey="alertCircle" size={24} />}
        >
            {connectionMessage}
        </Alert>
    );
}

export { ConnectionWarning };
