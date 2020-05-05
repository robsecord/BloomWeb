// Frameworks
import React, { createContext, useContext, useEffect, useReducer, useMemo } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

// App Components
import Wallet from '../wallets';
import { useLocalStorageContext } from './local-storage';

const initialState = {
    networkId           : 0,
    allReady            : false,

    // Connected Wallet
    connectedType       : '', // Wallet Connected if not Empty
    connectedAddress    : '',
    connectedName       : '',
    connectedBalance    : 0,
};
export const WalletContext = createContext(initialState);

export function useWalletContext() {
    return useContext(WalletContext);
}

const WalletReducer = (state, action) => {
    switch (action.type) {
        case 'CONNECTED_ACCOUNT':
            return {
                ...state,
                allReady         : action.payload.allReady,
                networkId        : action.payload.networkId,
                connectedType    : action.payload.type,
                connectedAddress : action.payload.address,
                connectedName    : action.payload.name,
                connectedBalance : action.payload.balance,
            };
        case 'LOGOUT':
            return {
                ...state,
                ...initialState,
            };
        default:
            return state;
    }
};

export default function Provider({children}) {
    const [state, dispatch] = useReducer(WalletReducer, initialState);
    return (
        <WalletContext.Provider value={[state, dispatch]}>
            {children}
        </WalletContext.Provider>
    )
}

export function Updater() {
    const wallet = useMemo(() => Wallet.instance(), []);
    const [, walletDispatch ] = useWalletContext();

    const [ cacheState, cacheDispatch ] = useLocalStorageContext();
    const cachedWallet = cacheState.cachedWallet;
    const updateCache = cacheDispatch.updateKey;

    const { site } = useStaticQuery(graphql`
        query SiteDataWalletQuery {
            site {
                siteMetadata {
                    title
                    logoUrl
                }
            }
        }
    `);
    const siteTitle = site.siteMetadata.title;
    const siteLogoUrl = site.siteMetadata.logoUrl;


    // Prepare Wallet Interface
    useEffect(() => {
        wallet.init({walletDispatch, updateCache, cachedWallet, siteTitle, siteLogoUrl});
    }, [wallet]);


    return null;
}
