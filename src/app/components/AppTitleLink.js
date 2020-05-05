// Frameworks
import React from 'react';
import { navigate } from '@reach/router';

// App Components
import Logo from '../../images/svg/Bloom_Transparent.svg';

// Common
import { GLOBALS } from '../utils/globals';


const AppTitleLink = ({ title }) => {
    const _goHome = () => {
        navigate(GLOBALS.APP_ROOT);
    };

    return (
        <>
            <Logo
                onClick={_goHome} 
                alt="Bloom"
                style={{width: '100px', height: 'auto', marginTop: '2px', marginRight: '12px'}} 
            />
        </>
    );
};

export { AppTitleLink };
