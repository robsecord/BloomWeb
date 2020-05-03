// Frameworks
import React from 'react';

// Material UI
import Typography from '@material-ui/core/Typography';

// App Components
import SEO from '../../components/seo';
import PlantSection from '../components/PlantSection';

// Data Context for State
import { useWalletContext } from '../contexts/wallet';
import { useTransactionContext } from '../contexts/transaction';

// Custom Styles
import useRootStyles from '../layout/styles/root.styles';


// Create Route
const Create = ({ location }) => {
    const classes = useRootStyles();

    const [ walletState ] = useWalletContext();
    const { allReady, connectedAddress } = walletState;

    const [, txDispatch ] = useTransactionContext();

    return (
        <PlantSection>
            <SEO title={'Create Coupons!'} />
            <Typography
                variant={'h5'}
                component={'h3'}
                className={classes.pageHeader}
            >
                Create a new Coupon!
            </Typography>

            <p>todo..</p>

        </PlantSection>
    )
};

export default Create;
