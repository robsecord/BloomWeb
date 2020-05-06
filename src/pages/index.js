// Frameworks
// import React, { useEffect } from 'react';
// import { navigate } from 'gatsby';
import React from 'react';
import { Redirect } from '@reach/router';

// Material UI
import { makeStyles } from '@material-ui/core/styles';

// Layout Components
import Layout from '../components/layout';
import SEO from '../components/seo';

const useCustomStyles = makeStyles(() => ({
    '@keyframes spin3D': {
        from: {
            transform: 'rotate3d(.5,.5,.5, 360deg)',
        },
        to: {
            transform: 'rotate3d(0deg)',
        }
    },
    spinner: {
        width: 300,
        height: 300,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    border1: {
        position: 'absolute',
        width: 150,
        height: 150,
        padding: 3,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',
        background: 'linear-gradient(0deg, rgba(22, 214, 8,0.1) 33%, rgba(22, 214, 8,1) 100%)',
        animation: '$spin3D 1.8s linear 0s infinite',
    },
    border2: {
        position: 'absolute',
        width: 150,
        height: 150,
        padding: 3,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',
        background: 'linear-gradient(0deg, rgba(237, 237, 28,0.1) 33%, rgba(237, 237, 28,1) 100%)',
        animation: '$spin3D 2.2s linear 0s infinite',
    },
    core1: {
        width: '100%',
        height: '100%',
        backgroundColor: '#49e53baa',
        borderRadius: '50%',
    },
    core2: {
        width: '100%',
        height: '100%',
        backgroundColor: '#f9f990aa',
        borderRadius: '50%',
    },
}));

const IndexPage = () => {
    const customClasses = useCustomStyles();

    // useEffect(() => {
    //     navigate('/app');
    // }, []);

    return (
        <Layout>
            <SEO title="Welcome" keywords={[`coupons`, `interest`, `ethereum`]}/>

            <div className={customClasses.spinner}>
                <div className={customClasses.border1}>
                    <div className={customClasses.core1}></div>
                </div> 
                <div className={customClasses.border2}>
                    <div className={customClasses.core2}></div>
                </div> 
            </div>
            
            <Redirect to="/app" noThrow />
        </Layout>
    );
};

export default IndexPage;
