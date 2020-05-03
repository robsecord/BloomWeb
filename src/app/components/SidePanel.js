// Frameworks
import React from 'react';

// Custom Styles
import useRootStyles from '../layout/styles/root.styles';

function SidePanel() {
    const classes = useRootStyles();

    return (
        <div className={classes.sidePanelContainer}>
            <p>Coupons that<br/><strong>Grow</strong> in <strong>Value</strong></p>
        </div>
    );
}

export { SidePanel };
