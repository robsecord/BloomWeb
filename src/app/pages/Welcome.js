// Frameworks
import React from 'react';

// App Components
import SEO from '../../components/seo';
import PlantSection from '../components/PlantSection';
import WelcomeSection from '../components/WelcomeSection';

// Data Context for State
import { useNetworkContext } from '../contexts/network';
import { useWalletContext } from '../contexts/wallet';


// Welcome Route
const Welcome = () => {

    const [ networkState ] = useNetworkContext();
    const { isNetworkConnected } = networkState;
    //
    const [ walletState ] = useWalletContext();
    const { allReady } = walletState;


    return (
        <PlantSection>
            <SEO title={'Create Coupons!'} />
            {
                (allReady && isNetworkConnected)
                    ? (
                        <p>Logged in</p>
                    )
                    : (
                        <WelcomeSection />
                    )
            }
        </PlantSection>
    )
};

export default Welcome;
