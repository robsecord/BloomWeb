// Frameworks
import React from 'react';

// Layout Components
import './reset.css';
import './layout.css';

// Layout Wrapper
const Layout = ({children}) => {
    return (
        <main>{children}</main>
    );
};

export default Layout;
