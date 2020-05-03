// Frameworks
import React from 'react';
import UseAnimations from 'react-useanimations';
import * as _ from 'lodash';

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

    if (_.isEmpty(connectionState) || connectionState.type !== 'WEB3_WRONG_NETWORK') {
        return '';
    }

    return (
        <Alert
            variant="outlined"
            severity="error"
            className={customClasses.alertBox}
            icon={<UseAnimations animationKey="alertCircle" size={24} />}
        >
            {connectionState.message}
        </Alert>
    );
}

export { ConnectionWarning };
